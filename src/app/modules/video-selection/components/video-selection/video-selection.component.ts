import { Component, HostListener } from '@angular/core';
import { DefaultBtnComponent } from "../../../../shared/components/buttons/default-btn/default-btn.component";
import { VideoSelectionService } from "../../services/video-selection/video-selection.service";
import { DragAndDropFileDirective } from "../../directives/drag-and-drop-file/drag-and-drop-file.directive";

@Component({
  selector: 'lmp-video-selection',
  standalone: true,
  imports: [
    DefaultBtnComponent,
    DragAndDropFileDirective
  ],
  templateUrl: './video-selection.component.html',
  styleUrl: './video-selection.component.css'
})
export class VideoSelectionComponent {
  constructor(private videoSelectionService: VideoSelectionService) {}

  public openFile(): void {
    this.videoSelectionService.loadFromFileSystem().then();
  }

  public loadByURL(url: string): void {
    this.videoSelectionService.loadByUrl(url);
  }
}
