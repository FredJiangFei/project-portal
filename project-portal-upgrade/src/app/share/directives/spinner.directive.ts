import { Directive, Input, OnChanges, SimpleChanges, ElementRef, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { Spinner } from '../../../../node_modules/spin.js';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective implements OnChanges {
  @Input() appSpinner: boolean;
  spinner: Spinner;

  constructor(
    private elementRef: ElementRef) {
      const isButton = elementRef.nativeElement.localName === 'button';
      const spinnerOptions = isButton ? { color: '#fff' } : {};
      this. spinner =  new Spinner(spinnerOptions);
    }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.appSpinner.currentValue) {
      this.spinner.spin(this.elementRef.nativeElement);
    } else {
      this.spinner.stop();
    }
    this.elementRef.nativeElement.disabled = changes.appSpinner.currentValue;
  }
}
