import {Component, OnInit} from '@angular/core';

type Todo = { done: boolean, text: string };

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  newText: string = '';
  todos: Todo[];
  today: Date = new Date();

  constructor() {
    this.todos = [
      {done: false, text:'운동 하기'},
      {done: true, text: '공부 하기'}
    ]
  }

  ngOnInit(): void {
  }

  toggleTodo(todo: Todo) {
    todo.done = !todo.done;
  }

  addTodo(text: string) {
    this.todos.push({
      done : false,
      text : text
    });
  }

  // addTodo(newText: string) {
  //   if (newText != '') {
  //     this.todos.push({
  //       done: false,
  //       text: newText,
  //     });
  //     this.newText = '';
  //   }
  // }

}
