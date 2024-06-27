import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private url: string | null = null;
  private element: HTMLVideoElement | undefined;
  private elementReadySubject: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.setUrl(localStorage.getItem('videoUrl'));
  }

  public getUrl(): string | null {
    return this.url;
  }

  public setUrl(url: string | null): void {
    this.url = url;
    if (this.url) {
      localStorage.setItem('videoUrl', this.url);
    }
  }

  public getElement(): HTMLVideoElement | undefined {
    return this.element;
  }

  public setElement(videoElement: HTMLVideoElement) {
    this.element = videoElement;
    this.elementReadySubject.emit();
  }

  public isAvailable(): boolean {
    return Boolean(this.url);
  }

  get onElementReady(): Observable<void> {
    return this.elementReadySubject.asObservable();
  }
}
