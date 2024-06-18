import { Component } from '@angular/core';
import { DefaultBtnComponent } from "../../../../shared/components/buttons/default-btn/default-btn.component";

@Component({
  selector: 'lmp-video-selection',
  standalone: true,
  imports: [
    DefaultBtnComponent
  ],
  templateUrl: './video-selection.component.html',
  styleUrl: './video-selection.component.css'
})
export class VideoSelectionComponent {

}
