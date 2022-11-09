import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from 'src/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { KanbanList } from 'src/home/kanbanList.component';
import { HeaderComponent } from './header/header.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KanbanList,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
