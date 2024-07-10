import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoTimeTooltipPositionService {
  private position: WritableSignal<number> = signal<number>(0);

  public set(value: number): void {
    this.position.set(value);
  }

  public watch(): Signal<number> {
    return this.position.asReadonly();
  }
}
