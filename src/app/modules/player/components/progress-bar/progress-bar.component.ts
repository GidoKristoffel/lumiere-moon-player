import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { VideoControlService } from "../../services/video-control.service";

@Component({
  selector: 'lmp-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.videoControlService.onMouseMove(event, this.progressBarContainer.nativeElement);
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    this.videoControlService.onMouseUp();
  }

  @ViewChild('progressBarContainer') progressBarContainer!: ElementRef<HTMLDivElement>;
  public buffered = this.videoControlService.buffered.asReadonly();
  public progress = this.videoControlService.progress.asReadonly();

  constructor(private videoControlService: VideoControlService) {}

  public seekVideo(event: MouseEvent): void {
    this.videoControlService.seekVideo(event);
  }

  public startSeeking(event: MouseEvent): void {
    this.videoControlService.startSeeking(event);
  }

  public stopSeeking(): void {
    this.videoControlService.stopSeeking();
  }
}
