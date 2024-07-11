import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoTimeTooltipDisplayService {
  private display: WritableSignal<'block' | 'none'> = signal<'block' | 'none'>('none');

  public watch(): Signal<string> {
    return this.display.asReadonly();
  }

  public set(value: boolean): void {
    this.display.set(value ? 'block' : 'none');
  }
}
