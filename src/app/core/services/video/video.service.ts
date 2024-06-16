import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private video: File | undefined;

  constructor() { }

  public get(): File | undefined {
    return this.video;
  }

  public set(video: File): void {
    this.video = video;
  }

  public isAvailable(): boolean {
    return Boolean(this.video);
  }
}
