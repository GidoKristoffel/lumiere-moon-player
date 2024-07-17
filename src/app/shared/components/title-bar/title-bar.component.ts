import { Component, EventEmitter, HostListener, OnInit } from '@angular/core';
import { NgIf, NgOptimizedImage } from "@angular/common";
import { IconBtnComponent } from "../buttons/icon-btn/icon-btn.component";
import { WindowService } from "../../../core/services/window/window.service";
import {
  IconToggleBtnComponent
} from "../buttons/icon-toggle-btn/icon-toggle-btn.component";
import { DragRegionDirective } from "../../directives/drag-region/drag-region.directive";
import { appWindow } from "@tauri-apps/api/window";
import { FullscreenWindowService } from "../../../core/services/fullscreen-window/fullscreen-window.service";

@Component({
  selector: 'lmp-title-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    IconBtnComponent,
    IconToggleBtnComponent,
    DragRegionDirective,
    NgIf
  ],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.scss'
})
export class TitleBarComponent {
  public fullscreenStatus = this.fullscreenWindowService.watch();

  constructor(
      private windowService: WindowService,
      private fullscreenWindowService: FullscreenWindowService
  ) {}

  public minimizeWindow(): void {
    this.windowService.minimize();
  }

  public fullscreenWindow(): void {
    this.windowService.toggleFullscreen();
  }

  public closeWindow(): void {
    this.windowService.close();
  }

  public dblFullscreenWindow(): void {
    this.windowService.toggleFullscreen();
  }
}
