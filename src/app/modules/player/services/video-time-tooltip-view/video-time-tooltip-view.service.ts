import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoTimeTooltipViewService {
  private time: WritableSignal<string> = signal<string>('00:00');

  public watch(): Signal<string> {
    return this.time.asReadonly();
  }

  public set(value: string): void {
    this.time.set(value);
  }
}
