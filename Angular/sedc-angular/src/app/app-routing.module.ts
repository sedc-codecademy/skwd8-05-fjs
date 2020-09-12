import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { FilmsComponent } from './components/films/films.component';
import { ResidentsComponent } from './components/residents/residents.component';
import { UsersGuard } from './modules/shared/guards/users.guard';


const routes: Routes = [
  { path: '', component: MainWrapperComponent },
  { path: 'planets', component: PlanetsComponent},
  { path: 'films', component: FilmsComponent},
  { path: 'residents', component: ResidentsComponent,},
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(users => users.UsersModule), canActivate: [UsersGuard] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }