import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoProgressDragStatusService {
  private isAllowed = false;

  constructor() { }

  public get(): boolean {
    return this.isAllowed;
  }

  public allow(): void {
    if (!this.isAllowed) {
      this.isAllowed = true;
    }
  }

  public deny(): void {
    if (this.isAllowed) {
      this.isAllowed = false;
    }
  }
}
