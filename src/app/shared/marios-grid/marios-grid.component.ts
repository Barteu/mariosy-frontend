import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Marios } from 'src/app/interfaces/marios';

@Component({
  selector: 'app-marios-grid',
  templateUrl: './marios-grid.component.html',
  styleUrls: ['./marios-grid.component.css'],
})
export class MariosGridComponent {
  @Input() marioses: Marios[] = [];

  @ViewChild('box', { static: false }) box: ElementRef = {} as ElementRef;

  columns: number = 3;

  onBoxResize() {
    if (this.box) {
      if (
        this.box.nativeElement.clientWidth / window.screen.width < 0.35 ||
        this.box.nativeElement.clientWidth < 850
      ) {
        this.columns = 2;
      } else {
        this.columns = 3;
      }
    } else {
      this.columns = 3;
    }
  }
}
