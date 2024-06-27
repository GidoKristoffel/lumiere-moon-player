import { Injectable, NgZone } from '@angular/core';
import { open } from '@tauri-apps/api/dialog';
import { Router } from "@angular/router";
import { convertFileSrc } from '@tauri-apps/api/tauri';
import { listen } from "@tauri-apps/api/event";
import { VideoService } from "../../../../core/services/video/video.service";

@Injectable({
  providedIn: 'root'
})
export class VideoSelectionService {
  constructor(private videoService: VideoService, private router: Router, private ngZone: NgZone) {
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

      this.videoService.setUrl(convertFileSrc(selected as string));
      this.router.navigate(['player']).then();
    } catch (error) {
      console.error('Failed to open file dialog:', error);
    }
  }

  public loadByUrl(url: string): void {
    if (url) {
      this.checkVideoPlayable(url)
          .then((): void => {
            this.videoService.setUrl(url);
            this.router.navigate(['player']).then();
          })
          .catch((): void => {
            this.videoService.setUrl(null);
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

  public watchLoadByDragAndDrop(): void {
    listen('tauri://file-drop', (event: {payload: string[]}): void => {
      if (event.payload && event.payload.length > 0) {
        this.videoService.setUrl(convertFileSrc(event.payload[0]));
        this.ngZone.run(() => this.router.navigate(['player'])).then();
      }
    }).then();
  }
}
