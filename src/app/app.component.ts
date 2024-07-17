import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ControlPanelComponent } from "./modules/player/components/control-panel/control-panel.component";
import { TitleBarComponent } from "./shared/components/title-bar/title-bar.component";
import { FullscreenWindowService } from "./core/services/fullscreen-window/fullscreen-window.service";
import { HotkeysService } from "./core/services/hotkeys/hotkeys.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ControlPanelComponent, TitleBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
      private fullscreenWindowService: FullscreenWindowService,
      private hotkeysService: HotkeysService
  ) {
    this.fullscreenWindowService.init();
    this.hotkeysService.init();
  }
}
