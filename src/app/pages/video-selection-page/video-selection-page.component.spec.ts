import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSelectionPageComponent } from './video-selection-page.component';

describe('VideoSelectionPageComponent', () => {
  let component: VideoSelectionPageComponent;
  let fixture: ComponentFixture<VideoSelectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoSelectionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
