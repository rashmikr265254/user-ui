import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';
import { ShowUserComponent } from './show-user/show-user.component';

const routes: Routes = [
  {
    path: 'add-user',
    component: AddUpdateUserComponent
  },
  {
      path: '',
      component: ShowUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
