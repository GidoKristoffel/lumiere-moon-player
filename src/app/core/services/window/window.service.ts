import { Injectable } from '@angular/core';
import { appWindow } from '@tauri-apps/api/window';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }

  public minimize(): void {
    appWindow.minimize().then();
  }

  public setFullscreen(fullscreen: boolean): void {
    appWindow.setFullscreen(fullscreen).then();
  }

  public toggleFullscreen(): void {
    appWindow.isFullscreen().then((isFullscreen) => {
      this.setFullscreen(!isFullscreen);
    });
  }

  public close(): void {
    appWindow.close().then();
  }
}
