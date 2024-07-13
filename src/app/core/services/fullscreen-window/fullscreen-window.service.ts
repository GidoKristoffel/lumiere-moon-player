import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { appWindow } from "@tauri-apps/api/window";

@Injectable({
  providedIn: 'root'
})
export class FullscreenWindowService {
  private isFullScreen: WritableSignal<boolean> = signal<boolean>(false);

  public init(): void {
    appWindow.isFullscreen().then((isFullscreen: boolean): void => {
      this.isFullScreen.set(isFullscreen);
    });
  }

  public watch(): Signal<boolean> {
    return this.isFullScreen.asReadonly();
  }

  public set(fullscreen: boolean): void {
    appWindow.setFullscreen(fullscreen).then(() => {
      this.isFullScreen.set(fullscreen);
    });
  }
}
