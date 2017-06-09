import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StreamrrStaticModule } from './streamrr-static/streamrr-static.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    // Streamrr Feature Modules
    StreamrrStaticModule,
    // Core Dependencies
    BrowserModule,
    HttpModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
