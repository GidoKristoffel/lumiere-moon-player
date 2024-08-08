import { TestBed } from '@angular/core/testing';

import { NoFocusService } from './no-focus.service';
import { Renderer2, RendererFactory2 } from "@angular/core";

describe('NoFocusService', () => {
  let service: NoFocusService;
  let renderer2Spy: jasmine.SpyObj<Renderer2>;
  let rendererFactorySpy: jasmine.SpyObj<RendererFactory2>;

  beforeEach(() => {
    renderer2Spy = jasmine.createSpyObj('Renderer2', ['listen']);
    rendererFactorySpy = jasmine.createSpyObj('RendererFactory2', ['createRenderer']);
    rendererFactorySpy.createRenderer.and.returnValue(renderer2Spy);

    TestBed.configureTestingModule({
      providers: [
        NoFocusService,
        { provide: RendererFactory2, useValue: rendererFactorySpy }
      ]
    });

    service = TestBed.inject(NoFocusService);
  });

  it('should initialize listener on init', () => {
    service.init();

    expect(renderer2Spy.listen).toHaveBeenCalledWith('document', 'focusin', jasmine.any(Function));
  });

  it('should blur the button when focusin event occurs', () => {
    service.init();

    const mockButton = document.createElement('button');
    const blurSpy = spyOn(mockButton, 'blur');

    const listenCallback = renderer2Spy.listen.calls.mostRecent().args[2] as (event: Event) => void;

    const mockEvent = new FocusEvent('focusin', {
      target: mockButton
    });

    listenCallback(mockEvent);

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should not blur if focusin event occurs on a non-button element', () => {
    service.init();

    const mockDiv = document.createElement('div');
    const blurSpy = spyOn(mockDiv, 'blur');

    const listenCallback = renderer2Spy.listen.calls.mostRecent().args[2] as (event: Event) => void;

    const mockEvent = new FocusEvent('focusin', {
      target: mockDiv
    });

    listenCallback(mockEvent);

    expect(blurSpy).not.toHaveBeenCalled();
  });

  it('should remove the listener on ngOnDestroy', () => {
    const listenerSpy = jasmine.createSpy('listener');
    renderer2Spy.listen.and.returnValue(listenerSpy);

    service.init();
    service.ngOnDestroy();

    expect(listenerSpy).toHaveBeenCalled();
  });

  it('should do nothing in ngOnDestroy if no listener is initialized', () => {
    expect(() => service.ngOnDestroy()).not.toThrow();
  });
});
