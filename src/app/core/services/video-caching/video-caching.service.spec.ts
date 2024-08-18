import { TestBed } from '@angular/core/testing';

import { VideoCachingService } from './video-caching.service';
import { VideoService } from "../video/video.service";

describe('VideoCachingService', () => {
  let service: VideoCachingService;
  let videoServiceSpy: jasmine.SpyObj<VideoService>;

  beforeEach(() => {
    const videoServiceSpyObj = jasmine.createSpyObj('VideoService', ['set']);

    TestBed.configureTestingModule({
      providers: [
        VideoCachingService,
        { provide: VideoService, useValue: videoServiceSpyObj }
      ]
    });

    service = TestBed.inject(VideoCachingService);
    videoServiceSpy = TestBed.inject(VideoService) as jasmine.SpyObj<VideoService>;
  });

});
