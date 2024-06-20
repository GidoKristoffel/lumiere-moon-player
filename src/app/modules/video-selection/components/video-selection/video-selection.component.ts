import { Component } from '@angular/core';
import { DefaultBtnComponent } from "../../../../shared/components/buttons/default-btn/default-btn.component";
import { VideoSelectionService } from "../../services/video-selection/video-selection.service";

@Component({
  selector: 'lmp-video-selection',
  standalone: true,
  imports: [
    DefaultBtnComponent
  ],
  templateUrl: './video-selection.component.html',
  styleUrl: './video-selection.component.css'
})
export class VideoSelectionComponent {
  constructor(private videoSelectionService: VideoSelectionService) {}

  public openFile(): void {
    console.log('open file');
    this.videoSelectionService.loadFromFileSystem();
  }
}
