import { Injectable } from '@angular/core';
import { StylesService } from "../styles/styles.service";
import { appWindow } from "@tauri-apps/api/window";
import { FullscreenWindowService } from "../fullscreen-window/fullscreen-window.service";

@Injectable({
  providedIn: 'root'
})
export class FullscreenVideoService {
  constructor(
      private styleService: StylesService,
      private fullscreenWindowService: FullscreenWindowService
  ) {}

  public on(): void {
    this.styleService.setByTagName('body', 'border-width', '0');
    this.styleService.setByTagName('lmp-title-bar', 'display', 'none');
    this.fullscreenWindowService.set(true);
  }

  public off(): void {
    this.styleService.setByTagName('body', 'border-width', '4px');
    this.styleService.setByTagName('lmp-title-bar', 'display', 'block');
    this.fullscreenWindowService.set(false);
  }
}
