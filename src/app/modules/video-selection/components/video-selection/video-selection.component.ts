import { Component, OnInit } from '@angular/core';
import { DefaultBtnComponent } from "../../../../shared/components/buttons/default-btn/default-btn.component";
import { VideoSelectionService } from "../../services/video-selection/video-selection.service";

@Component({
  selector: 'lmp-video-selection',
  standalone: true,
  imports: [DefaultBtnComponent],
  templateUrl: './video-selection.component.html',
  styleUrl: './video-selection.component.css'
})
export class VideoSelectionComponent implements OnInit {

  constructor(private videoSelectionService: VideoSelectionService) {}

  ngOnInit(): void {
    this.videoSelectionService.watchLoadByDragAndDrop();
  }

  public openFile(): void {
    this.videoSelectionService.loadFromFileSystem().then();
  }

  public loadByURL(url: string): void {
    this.videoSelectionService.loadByUrl(url);
  }
}
