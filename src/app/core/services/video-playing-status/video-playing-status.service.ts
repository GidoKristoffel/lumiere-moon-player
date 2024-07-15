import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayingStatusService {
  private status: WritableSignal<boolean> = signal<boolean>(false);

  public watch(): Signal<boolean> {
    return this.status.asReadonly();
  }

  public set(status: boolean): void {
    this.status.set(status);
  }
}
