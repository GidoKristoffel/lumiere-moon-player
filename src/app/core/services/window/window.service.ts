import { Injectable } from '@angular/core';
import { appWindow } from '@tauri-apps/api/window';
import { FullscreenWindowService } from "../fullscreen-window/fullscreen-window.service";

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor(private fullscreenWindowService: FullscreenWindowService) { }

  public minimize(): void {
    appWindow.minimize().then();
  }

  public setFullscreen(fullscreen: boolean): void {
    appWindow.setFullscreen(fullscreen).then();
  }

  public toggleFullscreen(): void {
    appWindow.isFullscreen().then((isFullscreen) => {
      this.fullscreenWindowService.set(!isFullscreen);
    });
  }

  public close(): void {
    appWindow.close().then();
  }
}
