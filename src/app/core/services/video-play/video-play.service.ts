import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayService {
  private playing: WritableSignal<boolean> = signal<boolean>(false);
  private videoElement: HTMLVideoElement | undefined = undefined;

  constructor() { }

  init(videoElement: HTMLVideoElement): void {
    this.videoElement = videoElement;
  }
}
