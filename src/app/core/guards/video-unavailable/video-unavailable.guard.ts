import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { VideoService } from "../../services/video/video.service";

export const videoUnavailableGuard: CanActivateFn = (): boolean => {
  const videoService: VideoService = inject(VideoService);
  const router: Router = inject(Router);

  if (videoService.isAvailable()) {
    router.navigate(['player']).then();
    return false;
  } else {
    return true;
  }
};
