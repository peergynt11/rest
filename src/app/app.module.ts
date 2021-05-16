import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { User1Component } from './components/user/user1/user1.component';
import { User2Component } from './components/user/user2/user2.component';
import { User3Component } from './components/user/user3/user3.component';
import { User4Component } from './components/user/user4/user4.component';

@NgModule({
  declarations: [
    AppComponent,
    User1Component,
    User2Component,
    User3Component,
    User4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
