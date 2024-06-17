import { Component } from '@angular/core';
import {
  VideoSelectionComponent
} from "../../modules/video-selection/components/video-selection/video-selection.component";

@Component({
  selector: 'lmp-video-selection-page',
  standalone: true,
  imports: [
    VideoSelectionComponent
  ],
  templateUrl: './video-selection-page.component.html',
  styleUrl: './video-selection-page.component.css'
})
export class VideoSelectionPageComponent {

}
