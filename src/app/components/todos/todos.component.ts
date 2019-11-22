import { Component, OnInit } from '@angular/core'
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  // Don't use the constructor to do much
  constructor() { }

  // Do init here instead!
  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'My First Todo',
        completed: false
      },
      {
        id: 2,
        title: 'My Second Todo',
        completed: false
      },
      {
        id: 3,
        title: 'A Completed Todo',
        completed: true
      },
      {
        id: 4,
        title: 'Another Todo',
        completed: false
      }
    ]
  }

}
