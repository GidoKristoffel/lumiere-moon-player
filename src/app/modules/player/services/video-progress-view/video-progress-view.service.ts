import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { WatchVideoElementReady } from "../../classes/watch-video-element-ready/watch-video-element-ready";
import { VideoService } from "../../../../core/services/video/video.service";

@Injectable({
  providedIn: 'root'
})
export class VideoProgressViewService extends WatchVideoElementReady {
  private progress: WritableSignal<number> = signal<number>(0);

  constructor(protected override videoService: VideoService) {
    super(videoService);
  }

  public watch(): Signal<number> {
    return this.progress.asReadonly();
  }

  public update(): void {
    if (this.videoElement) {
      this.progress.set((this.videoElement.currentTime / this.videoElement.duration) * 100);
    }
  }
}
