import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;

  constructor() { }

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
    this.todo.completed = !this.todo.completed;
  }

  onDelete() {
    console.log(this.todo);
  }

}
