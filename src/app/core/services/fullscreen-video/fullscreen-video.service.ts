import { Injectable } from '@angular/core';
import { StylesService } from "../styles/styles.service";

@Injectable({
  providedIn: 'root'
})
export class FullscreenVideoService {
  constructor(
      private styleService: StylesService
  ) {}

  public on(): void {
    this.styleService.setBodyStyle('border-width', '0');
  }

  public off(): void {
    this.styleService.setBodyStyle('border-width', '4px');
  }
}
