import { Component } from '@angular/core';
import { NgIf, NgOptimizedImage } from "@angular/common";
import { IconBtnComponent } from "../buttons/icon-btn/icon-btn.component";
import { WindowService } from "../../../core/services/window/window.service";
import {
  IconToggleBtnComponent
} from "../buttons/icon-toggle-btn/icon-toggle-btn.component";
import {
  MaximizedWindowStatusService
} from "../../../core/services/maximized-window-status/maximized-window-status.service";
import { WindowDragRegionDirective } from "../../directives/window-drag-region/window-drag-region.directive";

@Component({
  selector: 'lmp-title-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    IconBtnComponent,
    IconToggleBtnComponent,
    NgIf,
    WindowDragRegionDirective
  ],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.scss'
})
export class TitleBarComponent {
  public fullscreenStatus = this.maximizedWindowStatusService.watch();

  constructor(
      private windowService: WindowService,
      private maximizedWindowStatusService: MaximizedWindowStatusService
  ) {}

  public minimizeWindow(): void {
    this.windowService.minimize();
  }

  public toggleMaximize(): void {
    this.windowService.toggleMaximize();
  }

  public closeWindow(): void {
    this.windowService.close();
  }
}
