import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrediklyTaskRoutingModule } from './predikly-task-routing.module';
import { PrediklyTaskComponent } from './predikly-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrediklyTaskComponent
  ],
  imports: [
    CommonModule,
    PrediklyTaskRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PrediklyTaskModule { }
