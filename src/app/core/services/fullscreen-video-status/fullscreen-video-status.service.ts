import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { LocalStorageService } from "../local-storage/local-storage.service";
import { FullscreenVideoService } from "../fullscreen-video/fullscreen-video.service";

@Injectable({
  providedIn: 'root'
})
export class FullscreenVideoStatusService {
  private status: WritableSignal<boolean> = signal<boolean>(false);

  constructor(
      private localStorageService: LocalStorageService,
      private fullscreenVideoService: FullscreenVideoService
  ) {}

  public init(): void {
    this.status.set(this.localStorageService.get('fullscreen'));
    this.renderFullscreen();
  }

  public watch(): Signal<boolean> {
    return this.status.asReadonly();
  }

  public set(fullscreen: boolean): void {
    this.status.set(fullscreen);
    this.localStorageService.set('fullscreen', fullscreen);

    this.renderFullscreen();
  }

  public toggle(): void {
    this.set(!this.status());
  }

  private renderFullscreen(): void {
    if (this.status()) {
      this.fullscreenVideoService.on();
    } else {
      this.fullscreenVideoService.off();
    }
  }
}
