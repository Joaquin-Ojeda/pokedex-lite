import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { NewComponent } from './screens/new/new.component';
import { EditComponent } from './screens/edit/edit.component';
import { PokemonDetailComponent } from './screens/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'pokemon/undefined', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'new', component: NewComponent},
  {path:'pokemon/:id', component: PokemonDetailComponent},
  {path:'edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NewComponent, PokemonDetailComponent, EditComponent]
