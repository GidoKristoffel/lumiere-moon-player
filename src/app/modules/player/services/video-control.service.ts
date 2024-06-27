import { Injectable, signal, WritableSignal } from '@angular/core';
import { VideoService } from "../../../core/services/video/video.service";
import { take } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VideoControlService {
  public totalDuration: WritableSignal<number> = signal<number>(0);
  public currentPlaybackTime: WritableSignal<number> = signal<number>(0);

  constructor(private videoService: VideoService) {
    this.initVideoTime();
  }

  public togglePlayVideo(playing: boolean): void {
    if (playing) {
      this.play();
    } else {
      this.pause();
    }
  }

  private initVideoTime(): void {
    this.videoService.onElementReady.pipe(take(1)).subscribe(() => {
      const videoElement: HTMLVideoElement | undefined = this.videoService.getElement();

      if (videoElement) {
        videoElement.addEventListener('loadedmetadata', () => this.totalDuration.set(videoElement.duration * 1000));
        videoElement.addEventListener('timeupdate', () => this.currentPlaybackTime.set(videoElement.currentTime * 1000));
      }
    });
  }

  private play(): void {
    const videoElement: HTMLVideoElement | undefined = this.videoService.getElement();
    if (videoElement && videoElement.paused) {
      videoElement.play().then();
    }
  }

  private pause(): void {
    const videoElement: HTMLVideoElement | undefined = this.videoService.getElement();
    if (videoElement && !videoElement.paused) {
      videoElement.pause();
    }
  }
}
