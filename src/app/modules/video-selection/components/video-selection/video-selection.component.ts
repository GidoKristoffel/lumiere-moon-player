import { Component, HostListener } from '@angular/core';
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
  @HostListener('window:dragover', ['$event'])
  @HostListener('window:drop', ['$event'])
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  constructor(private videoSelectionService: VideoSelectionService) {}

  public openFile(): void {
    this.videoSelectionService.loadFromFileSystem().then();
  }

  public loadByURL(url: string): void {
    this.videoSelectionService.loadByUrl(url);
  }

  public loadByDragAndDrop(event: DragEvent): void {
    this.videoSelectionService.loadByDragAndDrop(event).then();
  }
}
