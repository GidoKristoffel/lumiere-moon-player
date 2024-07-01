import { Injectable } from '@angular/core';
import { VideoService } from "../../../../core/services/video/video.service";
import { WatchVideoElementReady } from "../../classes/watch-video-element-ready/watch-video-element-ready";

@Injectable({
  providedIn: 'root'
})
export class VideoPlayingService extends WatchVideoElementReady {
  protected constructor(
      protected override videoService: VideoService
  ) {
    super(videoService)
  }

  public toggle(playing: boolean): void {
    if (playing) {
      this.play();
    } else {
      this.pause();
    }
  }

  private play(): void {
    if (this.videoElement && this.videoElement.paused) {
      this.videoElement.play().then();
    }
  }

  private pause(): void {
    if (this.videoElement && !this.videoElement.paused) {
      this.videoElement.pause();
    }
  }
}
