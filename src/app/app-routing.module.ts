import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContainerComponent } from './container/container.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: 'Aboutus', component:AboutusComponent},
  {path: 'Contactus', component:ContactusComponent},
  {path: 'Register', component:RegisterComponent},
  {path: 'Home', component:ContainerComponent},
  {path: 'Getstarted', component:GetstartedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
