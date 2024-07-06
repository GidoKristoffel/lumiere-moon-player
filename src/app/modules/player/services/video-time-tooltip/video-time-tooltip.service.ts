import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoTimeTooltipService {
  private time: WritableSignal<string> = signal<string>('00:00');
  private display: WritableSignal<string> = signal<string>('none');
  private leftPosition: WritableSignal<number> = signal<number>(0);

  constructor() { }

  public watchTime(): Signal<string> {
    return this.time.asReadonly();
  }

  public watchDisplay(): Signal<string> {
    return this.display.asReadonly();
  }

  public watchLeftPosition(): Signal<number> {
    return this.leftPosition.asReadonly();
  }
}
