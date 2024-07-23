import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public setBodyStyle(property: string, value: string) {
    this.renderer.setStyle(document.body, property, value);
  }

  public removeBodyStyle(property: string) {
    this.renderer.removeStyle(document.body, property);
  }
}
