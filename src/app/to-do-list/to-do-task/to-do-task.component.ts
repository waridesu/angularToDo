import {Component, OnInit} from '@angular/core';
import {delay} from 'rxjs/operators';
import {TodosService} from '../../shared/todos.service';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.sass'],
})
export class ToDoTaskComponent implements OnInit {
  appTitle = 'angular todo app';
  public loading: boolean = true;

  constructor(public todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todosService.fetchTodos().pipe(delay(500)).subscribe(() => {
      this.loading = false;
    });
  }

  onToggle(id: number): void {
    this.todosService.onChange(id);
  }

  onRemove(id: number): void {
    this.todosService.removeTodo(id);
  }
}
