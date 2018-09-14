import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { HeaderComponent } from './header/header.component';
import { ServiceModule } from './services/service.module';

@NgModule({
  imports: [
    ShareModule,
    ServiceModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class CoreModule { }
