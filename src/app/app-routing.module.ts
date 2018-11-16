import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdeeShellComponent } from './containers/tdee-shell/tdee-shell.component';

const routes: Routes = [
  { path: '', component: TdeeShellComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
