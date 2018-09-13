import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { MyPageComponent } from './my-page/my-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ShareModule,
    CoreModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
