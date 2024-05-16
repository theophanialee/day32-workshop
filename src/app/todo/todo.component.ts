import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todoForm!: FormGroup;

  @Output()
  ngSubmit = new Subject<Todo>();

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      description: ['', Validators.required],
      priority: ['', Validators.required],
      due: ['', [Validators.required, this.futureDateValidator]],
    });
  }

  futureDateValidator(control: any) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
      return { futureDate: true }; // Return futureDate error if selected date is not in the future
    }
    return null;
  }

  handleSubmit() {
    const jsonObj = JSON.stringify(this.todoForm.value);
    const todo: Todo = JSON.parse(jsonObj) as Todo;
    console.log('onsubmit, todo', todo);
    this.ngSubmit.next(todo);
  }
}
