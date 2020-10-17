import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardComponent} from './card/card.component';
import { FormComponent } from './form/form.component';
import { CarsComponent } from './cars/cars.component';
import {HttpClientModule} from '@angular/common/http';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoImputComponent } from './to-do-list/to-do-imput/to-do-imput.component';
import { ToDoTaskComponent } from './to-do-list/to-do-task/to-do-task.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    CarsComponent,
    ToDoListComponent,
    ToDoImputComponent,
    ToDoTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
