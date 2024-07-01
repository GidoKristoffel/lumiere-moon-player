import { Injectable, signal, WritableSignal } from '@angular/core';
import { take } from "rxjs";
import { VideoService } from "../../../../core/services/video/video.service";

@Injectable({
    providedIn: 'root'
})
export class VideoTimeService {
    public totalDuration: WritableSignal<number> = signal<number>(0);
    public currentPlaybackTime: WritableSignal<number> = signal<number>(0);

    constructor(private videoService: VideoService) {
        this.init();
    }

    public init(): void {
        this.videoService.onElementReady.pipe(take(1)).subscribe(() => {
            const videoElement: HTMLVideoElement | undefined = this.videoService.getElement();

            if (videoElement) {
                videoElement.addEventListener('loadedmetadata', () => this.totalDuration.set(videoElement.duration * 1000));
                videoElement.addEventListener('timeupdate', () => this.currentPlaybackTime.set(videoElement.currentTime * 1000));
            }
        });
    }
}
