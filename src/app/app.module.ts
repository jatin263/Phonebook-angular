import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserhomeComponent } from './Components/userhome/userhome.component';
import { AddformComponent } from './Components/userhome/addform/addform.component';
import { DisplayComponent } from './Components/userhome/display/display.component';
import { Routes, Router ,RouterModule} from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';

const appRoute:Routes = [
  {path:"",component:LandingComponent},
  {path:"Login",component:LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Home",component:UserhomeComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    AddformComponent,
    DisplayComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
