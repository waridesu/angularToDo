import { TodosService } from './../shared/todos.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.sass'],
})
export class ToDoComponent implements OnInit {
  appTitle = 'angular todo app';
  constructor(public todosService: TodosService) {}

  ngOnInit(): void {}
  
  onToggle(id:number){
    this.todosService.onChange(id)
  }
  onRemove(id:number){
    this.todosService.removeTodo(id)
  }

}

