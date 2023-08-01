import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <button (click)="addTodo(newText)">+</button>
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText"> <!-- [(ngModel)] : 양방향 데이터 바인딩 함-->
  `,
  styles: [`
    :host {
        display: block;
        padding: 16px 16px 16px 10px;
        background-color: white;
    }

    input {
        display: inline-block;
        font-size: 18px;
        border: none;
    }

    input:focus, button:focus {
      outline: none
    }

    button {
        width: 24px;
        height: 24px;
        border-radius: 24px;
        color: white;
        font-size: 16px;
        line-height: 17px;
        border: 1px solid dimgray;
        background-color: darkblue;
    }
  `]
})
export class AddTodoComponent implements OnInit {

  @Output() onTodoAdded = new EventEmitter();
  newText: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  // 부모컴포넌트에 있는 todos 배열에 추가되어야됨
  // eventEmitter를 이용
  addTodo(newText: string) {
    if (newText != '') {
      this.onTodoAdded.emit(newText);
      this.newText = '';
      // 또는
      // this.onTodoAdded.emit({
      //   done: false,
      //   text: newText,
      // });
      // 전달 가능

    }
  }

}
