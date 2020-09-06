import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardComponent} from './card/card.component';
import { FormComponent } from './form/form.component';
import { CarsComponent } from './cars/cars.component';
import { ToDoComponent } from './to-do/to-do.component'


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    CarsComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( [
      { path: 'card', component: CardComponent},
      { path: 'cars', component: CarsComponent},
      { path: 'todo', component: ToDoComponent}
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
