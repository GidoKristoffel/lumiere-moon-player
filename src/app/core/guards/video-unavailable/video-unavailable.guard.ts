import { CanActivateFn, Router } from '@angular/router';
import { VideoService } from "../../services/video/video.service";
import { inject } from "@angular/core";

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
