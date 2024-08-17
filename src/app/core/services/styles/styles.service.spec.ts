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

  it('should set style on elements with specified tag name', () => {
    // Mock document.getElementsByTagName
    const mockElements = [
      document.createElement('div'),
      document.createElement('div')
    ];
    spyOn(document, 'getElementsByTagName').and.returnValue(mockElements as any);

    service.setByTagName('div', 'display', 'none');

    expect(renderer2Spy.setStyle).toHaveBeenCalledTimes(2);
    expect(renderer2Spy.setStyle).toHaveBeenCalledWith(mockElements[0], 'display', 'none');
    expect(renderer2Spy.setStyle).toHaveBeenCalledWith(mockElements[1], 'display', 'none');
  });

  it('should remove style from elements with specified tag name', () => {
    // Mock document.getElementsByTagName
    const mockElements = [
      document.createElement('div'),
      document.createElement('div')
    ];
    spyOn(document, 'getElementsByTagName').and.returnValue(mockElements as any);

    service.removeByTagName('div', 'display');

    expect(renderer2Spy.removeStyle).toHaveBeenCalledTimes(2);
    expect(renderer2Spy.removeStyle).toHaveBeenCalledWith(mockElements[0], 'display');
    expect(renderer2Spy.removeStyle).toHaveBeenCalledWith(mockElements[1], 'display');
  });
});
