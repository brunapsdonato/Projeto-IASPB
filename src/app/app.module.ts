import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListVolunteerComponent } from './components/list-volunteer/list-volunteer.component';
import { CreateVolunteerComponent } from './components/create-volunteer/create-volunteer.component';
import { HomeComponent } from './components/home/home.component';
import { firebaseConfig } from '../firebase.config';
import {FirestoreModule} from './firestore/@angular/firestore.module';
import {AngularFireModule} from "@angular/fire/compat";
import { AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListUsersComponent,
    CreateUserComponent,
    ListVolunteerComponent,
    CreateVolunteerComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
