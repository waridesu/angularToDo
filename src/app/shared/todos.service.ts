import { Injectable } from '@angular/core';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    date?: any;
  }
  
@Injectable({providedIn: 'root'})
export class TodosService{
public todos: Todo[]=[
    { id: 1, title: 'хлеб', completed: false, date: new Date() },
    { id: 2, title: 'мясо', completed: true, date: new Date() },
    { id: 3, title: 'рыба', completed: false, date: new Date() },
]
onChange(id: number) {
    const idx = this.todos.findIndex((t) => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }
  removeTodo(id: number){
    this.todos = this.todos.filter(t => t.id !== id)}
}