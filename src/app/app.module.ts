import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  // Components go here. They need to be added here. Will automatically be added by CLI
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent
  ],
  // If you want to use HTTP module, it will be included here.
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  // Services to include
  providers: [],
  // Main component (load this first?)
  bootstrap: [AppComponent]
})
export class AppModule { }
