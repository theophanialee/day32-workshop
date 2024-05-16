import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'day32-workshop';

  taskList: Todo[] = [];

  handleTodoSubmit(todo: Todo) {
    this.taskList.push(todo);
    console.log('Received todo:', this.taskList);
  }
}
