import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from '../../services/todo.service'
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // Set classes on top level component
  setClasses() {
    let classes = {
      'todo': true,
      'completed': this.todo.completed
    };

    return classes;
  }

  onSelect() {
    // Toggle UI
    this.todo.completed = !this.todo.completed;
    // Toggle server
    this.todoService.toggleCompleted(this.todo).subscribe(todo => console.log(todo))
  }

  onDelete() {
    console.log(this.todo);
  }

}
