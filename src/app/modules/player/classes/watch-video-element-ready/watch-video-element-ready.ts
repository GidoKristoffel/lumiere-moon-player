import { take } from "rxjs";
import { VideoService } from "../../../../core/services/video/video.service";

export abstract class WatchVideoElementReady {
    videoElement: HTMLVideoElement | undefined = undefined;

    protected constructor(
        protected videoService: VideoService
    ) {
        this.watchElementReady();
    }

    private watchElementReady(): void {
        this.videoService.onElementReady.pipe(take(1)).subscribe(() => {
            this.videoElement = this.videoService.getElement();
        });
    }
}
