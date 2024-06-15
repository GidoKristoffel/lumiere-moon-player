import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgIf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'lmp-icon-toggle-btn',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './icon-toggle-btn.component.html',
  styleUrl: './icon-toggle-btn.component.css'
})
export class IconToggleBtnComponent implements OnChanges {
  @Input() btnSize: string = '';
  @Input() enabledIcon: string = '';
  @Input() disabledIcon: string = '';
  @Input() iconSize: string = '';
  @Output() click: EventEmitter<boolean> = new EventEmitter<boolean>();

  public currentIcon!: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['disabledIcon'] && changes['disabledIcon'].firstChange) {
      this.currentIcon = changes['disabledIcon'].currentValue;
    }
  }

  public onClick(): void {
    this.toggle();
    this.click.emit(this.currentIcon === this.enabledIcon);
  }

  private toggle(): void {
    if (this.currentIcon) {
      this.currentIcon = this.currentIcon === this.enabledIcon ? this.disabledIcon : this.enabledIcon;
    }
  }
}
