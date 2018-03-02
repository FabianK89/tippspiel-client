import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MyBetsComponent } from './components/my-bets/my-bets.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyDataComponent } from './components/my-data/my-data.component';

import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    HomeComponent,
    MyBetsComponent,
    MyProfileComponent,
    MyDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
