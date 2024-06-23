import { Injectable } from '@angular/core';
import { VideoService } from "../video/video.service";

@Injectable({
  providedIn: 'root'
})
export class VideoCachingService {

  constructor(public videoService: VideoService) { }

  public init(): void {
    this.videoService.set(localStorage.getItem('videoUrl'));
  }

  public run(video: string): void {
    localStorage.setItem('videoUrl', video);
  }
}
