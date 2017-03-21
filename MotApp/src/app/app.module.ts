import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AngularFireModule,AuthMethods,AuthProviders } from 'angularfire2'
import {ROUTES} from './Commons/Routes';
// app components



// config firbesa in the project 
export const firbaseConfig ={
    apiKey: "AIzaSyCINf7caKrNXfL1_2qry3HFQnzsyP_7eLE",
    authDomain: "anuncia-tu-moto.firebaseapp.com",
    databaseURL: "https://anuncia-tu-moto.firebaseio.com",
    storageBucket: "anuncia-tu-moto.appspot.com",
    messagingSenderId: "42864131291"
}

export const firebaseAuthConfig={
  providers: [AuthProviders.Google,AuthProviders.Facebook],
  method:AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(firbaseConfig,firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
