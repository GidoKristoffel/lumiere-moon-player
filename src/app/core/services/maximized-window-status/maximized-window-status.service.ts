import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { appWindow } from "@tauri-apps/api/window";

@Injectable({
  providedIn: 'root'
})
export class MaximizedWindowStatusService {
  private status: WritableSignal<boolean> = signal<boolean>(false);

  public init(): void {
    appWindow.isMaximized().then((status: boolean): void => {
      this.status.set(status);
    });
  }

  public watch(): Signal<boolean> {
    return this.status.asReadonly();
  }

  public set(status: boolean): void {
    this.status.set(status);
  }

  public update(): void {
    appWindow.isMaximized().then((status) => this.status.set(status));
  }
}
