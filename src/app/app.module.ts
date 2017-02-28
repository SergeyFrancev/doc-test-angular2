import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import {UserService} from "./user.service";
import {AccountService} from "./account.service";

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
