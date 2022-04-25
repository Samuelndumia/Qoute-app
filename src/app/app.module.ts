import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {formsmodule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { AdduceComponent } from './adduce/adduce.component';
import { AdduceFormComponent } from './adduce-form/adduce-form.component';
import { AdduceDetailsComponent } from './adduce-details/adduce-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StrikethroughDirective,
    AdduceComponent,
    AdduceFormComponent,
    AdduceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
