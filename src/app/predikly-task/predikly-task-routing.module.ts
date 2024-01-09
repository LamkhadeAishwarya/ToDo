import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrediklyTaskComponent } from './predikly-task.component';

const routes: Routes = [{ path: '', component: PrediklyTaskComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrediklyTaskRoutingModule { }
