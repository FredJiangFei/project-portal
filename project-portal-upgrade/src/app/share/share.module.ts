import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from './pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { LaddaModule } from 'angular2-ladda';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerDirective } from './directives/spinner.directive';
import { AuthGurd } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    PipesModule,
    LaddaModule.forRoot({
    }),
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    PipesModule,
    TranslateModule,
    LaddaModule,
    SpinnerComponent,
    SpinnerDirective
  ],
  declarations: [SpinnerComponent, SpinnerDirective],
  providers: [AuthGurd]
})
export class ShareModule { }
