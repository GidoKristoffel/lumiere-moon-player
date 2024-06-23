import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { VideoService } from "../../../../core/services/video/video.service";
import { VideoSelectionService } from "../../services/video-selection/video-selection.service";
import { Router } from "@angular/router";

@Directive({
  selector: '[dragAndDropFile]',
  standalone: true
})
export class DragAndDropFileDirective {
  @Output() fileDropped: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('dragover', ['$event']) onDragOver(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event']) onDrop(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    console.log(evt);
    this.videoSelectionService.loadByDragAndDrop(evt).then((): void => {
      this.router.navigate(['player']).then();
    });
  }

  constructor(private videoSelectionService: VideoSelectionService, private router: Router) {}
}
