import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { LocalStorageService } from "../local-storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class FullscreenVideoService {
  private isFullScreen: WritableSignal<boolean> = signal<boolean>(false);

  constructor(
      private localStorageService: LocalStorageService
  ) {}

  public init(): void {
    this.isFullScreen.set(this.localStorageService.get('fullscreen'));
  }

  public watch(): Signal<boolean> {
    return this.isFullScreen.asReadonly();
  }

  public set(fullscreen: boolean): void {
    this.isFullScreen.set(fullscreen);
    this.localStorageService.set('fullscreen', fullscreen);
  }

  public toggle(): void {
    this.set(!this.isFullScreen());
  }
}
