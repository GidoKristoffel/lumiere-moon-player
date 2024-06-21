import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { VideoService } from "../../../../core/services/video/video.service";

@Directive({
  selector: '[dragAndDropFile]',
  standalone: true
})
export class DragAndDropFileDirective {
  @Output() fileDropped: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('dragover', ['$event']) onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event']) onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    let files: FileList | undefined = evt.dataTransfer?.files;
    if (files && files?.length > 0) {
      this.videoService.set(files[0]);
    }
  }

  constructor(private videoService: VideoService) {}
}
