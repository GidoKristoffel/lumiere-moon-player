import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { VideoService } from "../../services/video/video.service";

export const videoAvailableGuard: CanActivateFn = (): boolean => {
  const videoService: VideoService = inject(VideoService);
  const router: Router = inject(Router);

  console.log('videoService.isAvailable(): ', videoService.isAvailable());

  if (videoService.isAvailable()) {
    return true;
  } else {
    router.navigate(['video-selection']).then();
    return false;
  }
};
