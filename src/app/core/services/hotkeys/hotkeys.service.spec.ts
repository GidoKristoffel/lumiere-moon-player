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
});
