import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { WatchVideoElementReady } from "../../classes/watch-video-element-ready/watch-video-element-ready";
import { VideoService } from "../../../../core/services/video/video.service";

@Injectable({
  providedIn: 'root'
})
export class VideoBufferingViewService extends WatchVideoElementReady{
  private buffered: WritableSignal<number> = signal<number>(0);

  constructor(protected override videoService: VideoService) {
    super(videoService);
  }

  public watch(): Signal<number> {
    return this.buffered.asReadonly();
  }

  public update(): void {
    if (this.videoElement && this.videoElement.buffered.length > 0) {
      this.buffered.set((this.videoElement.buffered.end(this.videoElement.buffered.length - 1) / this.videoElement.duration) * 100);
    }
  }
}
