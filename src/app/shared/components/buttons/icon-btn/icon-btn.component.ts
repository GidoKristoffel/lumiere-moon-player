import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InlineSVGModule } from "ng-inline-svg-2";
import { HttpClientModule } from "@angular/common/http";

@Component({
    selector: 'lmp-icon-btn',
    standalone: true,
    imports: [InlineSVGModule, HttpClientModule],
    templateUrl: './icon-btn.component.html',
    styleUrl: './icon-btn.component.css'
})
export class IconBtnComponent {
    @Input() btnSize: string = '';
    @Input() icon: string = '';
    @Input() iconSize: string = '';
    @Output() onClick: EventEmitter<void> = new EventEmitter();

    public onEmit(): void {
        this.onClick.emit();
    }
}
