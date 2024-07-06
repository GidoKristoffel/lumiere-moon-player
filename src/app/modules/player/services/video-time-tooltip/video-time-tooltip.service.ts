import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoTimeTooltipService {
  private time: WritableSignal<string> = signal<string>('00:00');

  constructor() { }

  public watchTime(): Signal<string> {
    return this.time.asReadonly();
  }
}
