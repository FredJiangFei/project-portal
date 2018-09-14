import { Component, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import {Spinner} from 'spin.js';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent  implements AfterViewInit {
  @Input() public isLoading: boolean;
  @Input() public message: string;

  @ViewChild('spinnerEl')
  private spinnerEl: ElementRef;

  ngAfterViewInit() {
    const spinner =  new Spinner({ color: '#fff' });
    spinner.spin(this.spinnerEl.nativeElement);
  }
}
