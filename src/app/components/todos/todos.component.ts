import { Component, OnInit } from '@angular/core'

import { TodoService } from '../../services/todo.service'
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  // Don't use the constructor to do much
  constructor(private todoService:TodoService) { }

  // Do init here instead!
  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    this.todos = this.todos.filter(item => item.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe(() => {
      console.log('deleted');
    });
  }
}
