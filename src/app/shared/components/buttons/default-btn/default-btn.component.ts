import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lmp-default-btn',
  standalone: true,
  imports: [],
  templateUrl: './default-btn.component.html',
  styleUrl: './default-btn.component.css'
})
export class DefaultBtnComponent {
  @Input() btnSize: string = '';
  @Input() icon: string = '';
  @Input() iconSize: string = '';
  @Output() click: EventEmitter<void> = new EventEmitter();

  public onClick(): void {
    this.click.emit();
  }
}
