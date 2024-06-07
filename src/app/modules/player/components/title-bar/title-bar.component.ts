import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { IconBtnComponent } from "../../../../shared/components/buttons/icon-btn/icon-btn.component";

@Component({
  selector: 'lmp-title-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    IconBtnComponent
  ],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css'
})
export class TitleBarComponent {

}
