import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullscreenVideoService {
  private isFullScreen: WritableSignal<boolean> = signal<boolean>(false);

  public watch(): Signal<boolean> {
    return this.isFullScreen.asReadonly();
  }

  public set(fullscreen: boolean): void {
    this.isFullScreen.set(fullscreen);
  }

  public toggle(): void {
    this.set(!this.isFullScreen());
  }
}
