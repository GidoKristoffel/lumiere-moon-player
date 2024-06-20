import { Injectable } from '@angular/core';
import { open } from '@tauri-apps/api/dialog';
import { readBinaryFile } from '@tauri-apps/api/fs';
import { VideoService } from "../../../../core/services/video/video.service";

@Injectable({
  providedIn: 'root'
})
export class VideoSelectionService {
  constructor(private videoService: VideoService) {
  }

  public async loadFromFileSystem(): Promise<void> {
    try {
      const selected = await open({
        multiple: false,
        filters: [{
          name: 'Video',
          extensions: ['mp4', 'mkv', 'avi', 'mov']
        }]
      });

      if (selected) {
        const videoPath = selected as string;
        const videoData = await readBinaryFile(videoPath);

        const blob: Blob = new Blob([videoData], { type: 'video/mp4' });
        this.videoService.set(URL.createObjectURL(blob));
      }
    } catch (error) {
      console.error('Failed to open file dialog:', error);
    }
  }

  public loadByUrl(url: string): void {
    if (url) {
      this.checkVideoPlayable(url)
          .then((): void => {
            this.videoService.set(url);
          })
          .catch((error): void => {
            this.videoService.set(null);
          });
    }
  }

  private checkVideoPlayable(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const video: HTMLVideoElement = document.createElement('video');
      video.src = url;

      video.addEventListener('loadedmetadata', () => {
        if (video.videoWidth > 0 && video.videoHeight > 0) {
          resolve();
        } else {
          reject();
        }
      });

      video.addEventListener('error', () => {
        reject();
      });
    });
  }
}
