import { Injectable } from '@angular/core';
import { appWindow } from '@tauri-apps/api/window';
import { MaximizedWindowStatusService } from "../maximized-window-status/maximized-window-status.service";

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor(
      private maximizedWindowStatusService: MaximizedWindowStatusService
  ) {}

  public minimize(): void {
    appWindow.minimize().then();
  }

  public toggleMaximize(): void {
    appWindow.isMaximized().then((status) => {
      if (status) {
        appWindow.unmaximize().then(() => this.maximizedWindowStatusService.set(!status));
      } else {
        appWindow.maximize().then(() => this.maximizedWindowStatusService.set(!status));
      }
    });
  }

  public setMaximize(status: boolean): void {
    if (status) {
      appWindow.maximize().then(() => this.maximizedWindowStatusService.set(status));
    } else {
      appWindow.unmaximize().then(() => this.maximizedWindowStatusService.set(status));
    }
  }

  public close(): void {
    appWindow.close().then();
  }

  public startDragging(): void {
    appWindow.startDragging().then();
  }
}
