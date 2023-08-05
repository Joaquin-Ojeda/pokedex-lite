import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { HttpClientModule } from '@angular/common/http';

// import { LoginComponent } from './screens/login/login.component';
// import { DashboardComponent } from './screens/dashboard/dashboard.component';
// import { NewComponent } from './screens/new/new.component';
// import { EditComponent } from './screens/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    PokeListComponent
    // LoginComponent,
    // DashboardComponent,
    // NewComponent,
    // EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
