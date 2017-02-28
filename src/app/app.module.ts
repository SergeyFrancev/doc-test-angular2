import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestHostComponent } from './test-host/test-host.component';
import { UserBannerComponent } from './user-banner/user-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    TestHostComponent,
    UserBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
