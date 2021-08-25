import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridViewComponent } from './grid-view/grid-view.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: '', component: GridViewComponent},
  {path: 'user/:data', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppGridRoutingModule { }
