import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconToggleBtnComponent } from './icon-toggle-btn.component';

describe('IconToggleBtnComponent', () => {
  let component: IconToggleBtnComponent;
  let fixture: ComponentFixture<IconToggleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconToggleBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconToggleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
