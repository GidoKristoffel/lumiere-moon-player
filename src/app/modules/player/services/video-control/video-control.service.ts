import { Injectable } from '@angular/core';
import { VideoService } from "../../../../core/services/video/video.service";

@Injectable({
  providedIn: 'root'
})
export class VideoControlService {

  constructor(
      private videoService: VideoService
  ) {}
}
