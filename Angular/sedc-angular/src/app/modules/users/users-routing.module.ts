import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersWrapperComponent } from './users-wrapper.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { SingleUserGuard } from '../shared/guards/single-user.guard';

const usersRoutes:Routes = [
  { 
    path: '', 
    component: UsersWrapperComponent,
    children: [
      {path: '', component: AllUsersComponent},
      {path: ':id', component: SingleUserComponent, canActivate: [SingleUserGuard]},
      // {path: ':id/edit', component: EditSignleUserComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
