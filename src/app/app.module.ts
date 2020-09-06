
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardComponent} from './card/card.component';
import { FormComponent } from './form/form.component';
import { CarsComponent } from './cars/cars.component'

const appRoutes: Routes = [
  { path: 'card', component: CardComponent},
  { path: 'cars', component: CarsComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
