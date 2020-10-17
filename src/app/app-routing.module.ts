import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardComponent} from './card/card.component';
import {CarsComponent} from './cars/cars.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full'},
  { path: 'card', component: CardComponent},
  { path: 'cars', component: CarsComponent},
  { path: 'todo', component: ToDoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
