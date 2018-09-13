import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    ShareModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class CoreModule { }
