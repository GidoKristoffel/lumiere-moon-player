import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoStorageService {
  private video: string | null = null;

  constructor() {
    this.set(localStorage.getItem('videoUrl'));
  }

  public get(): string | null {
    return this.video;
  }

  public set(video: string | null): void {
    this.video = video;
    if (this.video) {
      localStorage.setItem('videoUrl', this.video);
    }
  }

  public isAvailable(): boolean {
    return Boolean(this.video);
  }
}
