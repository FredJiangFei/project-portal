import { Directive, Input, OnChanges, SimpleChanges, ElementRef, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { Spinner } from '../../../../node_modules/spin.js';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective implements OnChanges {
  @Input() appSpinner: boolean;
  spinner =  new Spinner({ color: '#fff' });

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.appSpinner.currentValue) {
      const loadSpinner = document.createElement('span');
      this.spinner.spin(loadSpinner);

      this.renderer.appendChild(this.elementRef.nativeElement, loadSpinner);
      this.elementRef.nativeElement.disabled = true;
    } else {
      this.spinner.stop();
      this.elementRef.nativeElement.disabled = false;
    }
  }
}
