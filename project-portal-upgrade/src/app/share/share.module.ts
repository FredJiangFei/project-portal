import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from './pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { LaddaModule } from 'angular2-ladda';
import { SpinnerDirective } from './directives/spinner.directive';

@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    PipesModule,
    TranslateModule,
    LaddaModule,
    SpinnerDirective
  ],
  declarations: [SpinnerDirective]
})
export class ShareModule { }
