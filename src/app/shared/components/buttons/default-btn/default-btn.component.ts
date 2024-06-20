import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lmp-default-btn',
  standalone: true,
  templateUrl: './default-btn.component.html',
  styleUrl: './default-btn.component.css'
})
export class DefaultBtnComponent {
  @Input() btnSize: string = '';
  @Input() icon: string = '';
  @Input() iconSize: string = '';
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  public click(): void {
    this.onClick.emit();
  }
}
