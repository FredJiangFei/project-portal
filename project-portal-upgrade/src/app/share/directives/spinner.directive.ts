import { Directive, Input, OnChanges, SimpleChanges, ElementRef, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { Spinner } from '../../../../node_modules/spin.js';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective implements OnChanges {
  @Input() appSpinner: boolean;
  spinner: Spinner;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {
      const isButton = elementRef.nativeElement.localName === 'button';
      const spinnerOptions = isButton ? { color: '#fff' } : {};
      this. spinner =  new Spinner(spinnerOptions);
    }

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
