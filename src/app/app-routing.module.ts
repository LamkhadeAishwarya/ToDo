import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'/PrediklyTask',pathMatch:'full'},
  { path: 'PrediklyTask', loadChildren: () => import('./predikly-task/predikly-task.module').then(m => m.PrediklyTaskModule) },
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
