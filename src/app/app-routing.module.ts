import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { KanbanList } from 'src/home/kanbanList.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'getAllKanbans',component:KanbanList},
  {path:'', component:WelcomeComponent},
  {path:'home',component:WelcomeComponent},
  {path:'create',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
