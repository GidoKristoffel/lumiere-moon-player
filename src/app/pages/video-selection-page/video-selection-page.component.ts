import { Component } from '@angular/core';
import {
  VideoSelectionComponent
} from "../../modules/video-selection/components/video-selection/video-selection.component";
import { TitleBarComponent } from "../../modules/player/components/title-bar/title-bar.component";

@Component({
  selector: 'lmp-video-selection-page',
  standalone: true,
    imports: [
        VideoSelectionComponent,
        TitleBarComponent
    ],
  templateUrl: './video-selection-page.component.html',
  styleUrl: './video-selection-page.component.css'
})
export class VideoSelectionPageComponent {

}
