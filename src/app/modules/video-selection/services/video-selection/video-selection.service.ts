import { Injectable } from '@angular/core';
import { open } from '@tauri-apps/api/dialog';
import { readBinaryFile } from '@tauri-apps/api/fs';
import { VideoService } from "../../../../core/services/video/video.service";
import { Router } from "@angular/router";
import { convertFileSrc } from '@tauri-apps/api/tauri';

@Injectable({
  providedIn: 'root'
})
export class VideoSelectionService {
  constructor(private videoService: VideoService, private router: Router) {
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

      this.videoService.set(convertFileSrc(selected as string));
      this.router.navigate(['player']).then();
    } catch (error) {
      console.error('Failed to open file dialog:', error);
    }
  }

  public loadByUrl(url: string): void {
    if (url) {
      this.checkVideoPlayable(url)
          .then((): void => {
            this.videoService.set(url);
            this.router.navigate(['player']).then();
          })
          .catch((): void => {
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

  public async loadByDragAndDrop(event: DragEvent): Promise<void> {
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      const file: File = event.dataTransfer.files[0];
      const arrayBuffer: ArrayBuffer = await file.arrayBuffer();
      const blob: Blob = new Blob([arrayBuffer], { type: file.type });

      if (file.type.startsWith('video/')) {
        this.videoService.set(URL.createObjectURL(blob));
      } else {
        this.videoService.set(null);
      }
    }
  }
}
