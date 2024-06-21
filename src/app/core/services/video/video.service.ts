import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private video: string | ArrayBuffer | File | null = null;

  constructor() { }

  public get(): string | ArrayBuffer | File | null {
    return this.video;
  }

  public set(video: string | ArrayBuffer | File | null): void {
    this.video = video;
  }

  public isAvailable(): boolean {
    return Boolean(this.video);
  }
}
