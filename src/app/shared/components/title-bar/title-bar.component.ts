import { Component, EventEmitter, HostListener } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { IconBtnComponent } from "../buttons/icon-btn/icon-btn.component";
import { WindowService } from "../../../core/services/window/window.service";
import {
  IconToggleBtnComponent
} from "../buttons/icon-toggle-btn/icon-toggle-btn.component";
import { DragRegionDirective } from "../../directives/drag-region/drag-region.directive";

@Component({
  selector: 'lmp-title-bar',
  standalone: true,
    imports: [
        NgOptimizedImage,
        IconBtnComponent,
        IconToggleBtnComponent,
        DragRegionDirective
    ],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.scss'
})
export class TitleBarComponent {
  @HostListener('window:drag', ['$event']) onClick() {
    this.dragEnter();
  }

  constructor(private windowService: WindowService) {}

  public dragEnter(): void {
    console.log('++++++[');
  }

  public minimizeWindow(): void {
    this.windowService.minimize();
  }

  public fullscreenWindow(fullscreen: boolean): void {
    this.windowService.setFullscreen(fullscreen);
  }

  public closeWindow(): void {
    this.windowService.close();
  }
}
