import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ServiceModule } from './services/service.module';

@NgModule({
  imports: [
    ShareModule,
    ServiceModule
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
