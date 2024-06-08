import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'lmp-icon-btn',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './icon-btn.component.html',
  styleUrl: './icon-btn.component.css'
})
export class IconBtnComponent {
  @Input() btnSize: string = '';
  @Input() icon: string = '';
  @Input() iconSize: string = '';
  @Output() click: EventEmitter<void> = new EventEmitter();

  public onClick(): void {
    this.click.emit();
  }
}
