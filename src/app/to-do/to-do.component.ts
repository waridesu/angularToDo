import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.sass'],
})
export class ToDoComponent implements OnInit {
  appTitle = 'angular todo app';
  @Input() todos: Todo[] = [
    { id: 1, title: 'хлеб', completed: false, date: new Date() },
    { id: 2, title: 'мясо', completed: true, date: new Date() },
    { id: 3, title: 'рыба', completed: false, date: new Date() },
  ];
  @Output() onToggle = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  onChange(id: number) {
    const idx = this.todos.findIndex((t) => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }
  removeTodo(id: number){
  this.todos = this.todos.filter(t => t.id !== id)
}
}
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}
