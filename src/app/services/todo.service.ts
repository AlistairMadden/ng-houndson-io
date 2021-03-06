import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../models/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url:string = 'https://jsonplaceholder.typicode.com/todos';
  getQuery:string = '?_limit=5';

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}${this.getQuery}`);
  }

  private constructDetailURL(id:number):string {
    return `${this.url}/${id}`
  }

  toggleCompleted(todo:Todo):Observable<any> {
    const url = this.constructDetailURL(todo.id);
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo:Todo):Observable<Todo> {
    const url = this.constructDetailURL(todo.id);
    return this.http.delete<Todo>(url, httpOptions);
  }
}
