import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private video: string | ArrayBuffer | null = null;

  constructor() { }

  public get(): string | ArrayBuffer | null {
    return this.video;
  }

  public set(video: string | ArrayBuffer | null): void {
    this.video = video;
  }

  public isAvailable(): boolean {
    return Boolean(this.video);
  }
}
