import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';


const routes: Routes = [
  {path:"", component:HomeComponent },
  {path:"header", component:HeaderComponent },
  {path:"footer", component:FooterComponent },
  {path:"project-details", component:ProjectDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
