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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
