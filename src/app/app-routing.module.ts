import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateVolunteerComponent } from './components/create-volunteer/create-volunteer.component';
import { ListVolunteerComponent } from './components/list-volunteer/list-volunteer.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },   
  {path: 'list-users', component: ListUsersComponent},
  {path:'create-user', component: CreateUserComponent },
  {path: 'list-volunteer', component: ListVolunteerComponent},
  {path:'create-volunteer', component: CreateVolunteerComponent },
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
