import { TestBed } from '@angular/core/testing';

import { VideoPlayingStatusService } from './video-playing-status.service';
import { Signal } from "@angular/core";

describe('VideoPlayingStatusService', () => {
  let service: VideoPlayingStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPlayingStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the initial status as false', () => {
    const statusSignal: Signal<boolean> = service.watch();
    expect(statusSignal()).toBe(false);
  });

  it('should update the status correctly', () => {
    service.set(true);
    expect(service.watch()()).toBe(true);

    service.set(false);
    expect(service.watch()()).toBe(false);
  });
});
