import { TestBed } from '@angular/core/testing';

import { StylesService } from './styles.service';
import { Renderer2, RendererFactory2 } from "@angular/core";

describe('StylesService', () => {
  let service: StylesService;
  let renderer2Spy: jasmine.SpyObj<Renderer2>;

  beforeEach(() => {
    const rendererFactory2Spy = jasmine.createSpyObj('RendererFactory2', ['createRenderer']);
    renderer2Spy = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle']);

    rendererFactory2Spy.createRenderer.and.returnValue(renderer2Spy);

    TestBed.configureTestingModule({
      providers: [
        StylesService,
        { provide: RendererFactory2, useValue: rendererFactory2Spy }
      ]
    });

    service = TestBed.inject(StylesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
