import { Component, EventEmitter, HostListener, OnInit } from '@angular/core';
import { NgIf, NgOptimizedImage } from "@angular/common";
import { IconBtnComponent } from "../buttons/icon-btn/icon-btn.component";
import { WindowService } from "../../../core/services/window/window.service";
import {
  IconToggleBtnComponent
} from "../buttons/icon-toggle-btn/icon-toggle-btn.component";
import { DragRegionDirective } from "../../directives/drag-region/drag-region.directive";
import { appWindow } from "@tauri-apps/api/window";

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
export class TitleBarComponent implements OnInit {
  public defaultFullscreenStatus!: boolean;

  constructor(private windowService: WindowService) {}

  ngOnInit() {
    this.initDefaultFullscreenStatus();
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

  public dbFullscreenWindow(): void {
    this.windowService.toggleFullscreen();
  }

  private initDefaultFullscreenStatus(): void {
    appWindow.isFullscreen().then(isFullscreen => {
      console.log('isFullscreen: ', isFullscreen);
      this.defaultFullscreenStatus = isFullscreen;
    });
  }
}
