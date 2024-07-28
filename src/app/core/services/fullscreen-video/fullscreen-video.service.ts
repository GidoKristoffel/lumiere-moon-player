import { Injectable } from '@angular/core';
import { StylesService } from "../styles/styles.service";
import { appWindow } from "@tauri-apps/api/window";

@Injectable({
  providedIn: 'root'
})
export class FullscreenVideoService {
  constructor(
      private styleService: StylesService,
  ) {}

  public on(): void {
    this.styleService.setByTagName('body', 'border-width', '0');
    this.styleService.setByTagName('lmp-title-bar', 'display', 'none');
    appWindow.setFullscreen(true).then(() => {

    });
  }

  public off(): void {
    this.styleService.setByTagName('body', 'border-width', '4px');
    this.styleService.setByTagName('lmp-title-bar', 'display', 'block');
    appWindow.setFullscreen(false).then();
  }
}
