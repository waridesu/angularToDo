import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from '../../shared/todos.service';

@Component({
  selector: 'app-to-do-imput',
  templateUrl: './to-do-imput.component.html',
  styleUrls: ['./to-do-imput.component.sass']
})
export class ToDoImputComponent implements OnInit {
  title: string;

  constructor(private  todosService: TodosService) {
  }

  ngOnInit(): void {
  }

  addTodo(): void {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    };
    this.todosService.addTodo(todo);
    this.title = '';
  }
}
