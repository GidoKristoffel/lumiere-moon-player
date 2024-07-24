import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ControlPanelComponent } from "./modules/player/components/control-panel/control-panel.component";
import { TitleBarComponent } from "./shared/components/title-bar/title-bar.component";
import { FullscreenWindowService } from "./core/services/fullscreen-window/fullscreen-window.service";
import { HotkeysService } from "./core/services/hotkeys/hotkeys.service";
import { FullscreenVideoService } from "./core/services/fullscreen-video/fullscreen-video.service";
import { FullscreenVideoStatusService } from "./core/services/fullscreen-video-status/fullscreen-video-status.service";
import { NoFocusService } from "./core/services/no-focus/no-focus.service";
import { MaximizedWindowStatusService } from "./core/services/maximized-window-status/maximized-window-status.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ControlPanelComponent, TitleBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
      // private fullscreenWindowService: FullscreenWindowService,
      private hotkeysService: HotkeysService,
      private fullscreenVideoStatusService: FullscreenVideoStatusService,
      private noFocusService: NoFocusService,
      private maximizedWindowStatusService: MaximizedWindowStatusService
  ) {
    // this.fullscreenWindowService.init();
    this.maximizedWindowStatusService.init();
    this.hotkeysService.init();
    this.fullscreenVideoStatusService.init();
    this.noFocusService.init();
  }
}
