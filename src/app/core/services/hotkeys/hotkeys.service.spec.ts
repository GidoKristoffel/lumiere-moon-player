import { TestBed } from '@angular/core/testing';

import { HotkeysService } from './hotkeys.service';
import { Renderer2, RendererFactory2 } from "@angular/core";
import { WindowService } from "../window/window.service";
import { FullscreenVideoStatusService } from "../fullscreen-video-status/fullscreen-video-status.service";
import { VideoPlayingService } from "../../../modules/player/services/video-playing/video-playing.service";

describe('HotkeysService', () => {
  let service: HotkeysService;
  let rendererFactory: RendererFactory2;
  let windowService: jasmine.SpyObj<WindowService>;
  let fullscreenVideoStatusService: jasmine.SpyObj<FullscreenVideoStatusService>;
  let videoPlayingService: jasmine.SpyObj<VideoPlayingService>;
  let rendererSpy: jasmine.SpyObj<Renderer2>;

  beforeEach(() => {
    rendererSpy = jasmine.createSpyObj('Renderer2', ['listen']);
    rendererFactory = jasmine.createSpyObj('RendererFactory2', ['createRenderer']);
    (rendererFactory.createRenderer as jasmine.Spy).and.returnValue(rendererSpy);

    windowService = jasmine.createSpyObj('WindowService', ['setMaximize']);
    fullscreenVideoStatusService = jasmine.createSpyObj('FullscreenVideoStatusService', ['set', 'toggle']);
    videoPlayingService = jasmine.createSpyObj('VideoPlayingService', ['toggle']);

    TestBed.configureTestingModule({
      providers: [
        HotkeysService,
        { provide: RendererFactory2, useValue: rendererFactory },
        { provide: WindowService, useValue: windowService },
        { provide: FullscreenVideoStatusService, useValue: fullscreenVideoStatusService },
        { provide: VideoPlayingService, useValue: videoPlayingService },
      ],
    });

    service = TestBed.inject(HotkeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should listen for escape, space, and f keys', () => {
    service.init();

    expect(rendererSpy.listen).toHaveBeenCalledWith('document', 'keydown.escape', jasmine.any(Function));
    expect(rendererSpy.listen).toHaveBeenCalledWith('document', 'keydown.Space', jasmine.any(Function));
    expect(rendererSpy.listen).toHaveBeenCalledWith('document', 'keydown', jasmine.any(Function));
  });

  it('should call setMaximize(false) and set(false) on escape key press', () => {
    service.init();
    const escapeCallback = rendererSpy.listen.calls.argsFor(0)[2];

    escapeCallback();

    expect(windowService.setMaximize).toHaveBeenCalledWith(false);
    expect(fullscreenVideoStatusService.set).toHaveBeenCalledWith(false);
  });

  it('should call toggle on fullscreenVideoStatusService on "f" key press', () => {
    service.init();
    const keydownCallback = rendererSpy.listen.calls.argsFor(2)[2];

    keydownCallback({ key: 'f' });

    expect(fullscreenVideoStatusService.toggle).toHaveBeenCalled();
  });

  it('should call toggle on videoPlayingService on space key press', () => {
    service.init();
    const spaceCallback = rendererSpy.listen.calls.argsFor(1)[2];

    spaceCallback();

    expect(videoPlayingService.toggle).toHaveBeenCalled();
  });

  it('should remove listeners on destroy', () => {
    service.init();

    const escapeListener = rendererSpy.listen.calls.argsFor(0)[2];
    const spaceListener = rendererSpy.listen.calls.argsFor(1)[2];
    const fListener = rendererSpy.listen.calls.argsFor(2)[2];

    service.ngOnDestroy();

    // Ensure listeners are removed (calling the returned functions)
    expect(escapeListener).toBeDefined();
    expect(spaceListener).toBeDefined();
    expect(fListener).toBeDefined();
  });
});
