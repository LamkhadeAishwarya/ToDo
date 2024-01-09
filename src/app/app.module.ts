import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrediklyTaskservice } from './predikly-task/prediklytask.service';



@NgModule({
  declarations: [
    AppComponent,
  PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PrediklyTaskservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
