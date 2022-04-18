import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserResultPageComponent } from './user-result-page/user-result-page.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'user',component:UserResultPageComponent},
  {path:'repositories',component:RepositoriesComponent},
  {path:'404',component:ErrorPageComponent},
  {path:'**',redirectTo:'404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
