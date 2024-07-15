import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { VideoService } from "../video/video.service";

@Injectable({
  providedIn: 'root'
})
export class VideoPlayService {
  private playing: WritableSignal<boolean> = signal<boolean>(false);

  constructor(
      private videoService: VideoService
  ) { }

  public watch(): Signal<boolean> {
    return this.playing.asReadonly();
  }

  public set(playing: boolean): void {
    this.playing.set(playing);
    this.toggle();
  }

  private toggle(): void {
    const videoElement = this.videoService.getElement();

    if (videoElement) {
      if (this.playing()) {
        videoElement.play().then();
      } else {
        videoElement.pause();
      }
    }
  }
}
