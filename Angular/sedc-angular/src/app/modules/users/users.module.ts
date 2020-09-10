import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersWrapperComponent } from './users-wrapper.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [UsersWrapperComponent, AllUsersComponent, SingleUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule, 
    SharedModule
  ]
})
export class UsersModule { }
