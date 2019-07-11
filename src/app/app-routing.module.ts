import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{path: 'home' ,component:HomeComponent
},
{path: 'about', component:AboutComponent
},
{
	path: 'add-contact', component:AddContactComponent
}, 
{
	path: 'login' , component:LoginComponent
},
{
path: 'signup', component:SignupComponent
},
{
	path:'menu' ,component:MenuComponent
},
{
	path:'contact', component:ContactComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
