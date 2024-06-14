import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { IconBtnComponent } from "../../../../shared/components/buttons/icon-btn/icon-btn.component";
import { WindowService } from "../../../../core/services/window/window.service";
import {
  IconToggleBtnComponent
} from "../../../../shared/components/buttons/icon-toggle-btn/icon-toggle-btn.component";

@Component({
  selector: 'lmp-title-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    IconBtnComponent,
    IconToggleBtnComponent
  ],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css'
})
export class TitleBarComponent {
  constructor(private windowService: WindowService) {}

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
