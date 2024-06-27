import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgIf } from "@angular/common";
import { InlineSVGModule } from "ng-inline-svg-2";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'lmp-icon-toggle-btn',
  standalone: true,
  imports: [
    NgIf,
    InlineSVGModule, HttpClientModule
  ],
  templateUrl: './icon-toggle-btn.component.html',
  styleUrl: './icon-toggle-btn.component.css'
})
export class IconToggleBtnComponent implements OnChanges {
  @Input() btnSize: string = '';
  @Input() enabledIcon: string = '';
  @Input() disabledIcon: string = '';
  @Input() iconSize: string = '';
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  public currentIcon!: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['disabledIcon'] && changes['disabledIcon'].firstChange) {
      this.currentIcon = changes['disabledIcon'].currentValue;
    }
  }

  public onEmit(): void {
    this.toggle();
    this.onClick.emit(this.currentIcon === this.enabledIcon);
  }

  private toggle(): void {
    if (this.currentIcon) {
      this.currentIcon = this.currentIcon === this.enabledIcon ? this.disabledIcon : this.enabledIcon;
    }
  }
}
