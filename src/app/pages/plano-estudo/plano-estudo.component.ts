import { Component } from '@angular/core';

interface Todo {
  id: number;
  text: string;
  day: string;
}

@Component({
  selector: 'app-plano-estudo',
  templateUrl: './plano-estudo.component.html',
  styleUrls: ['./plano-estudo.component.scss']
})
export class PlanoEstudoComponent {
  mondayTodos: Todo[] = [];
  tuesdayTodos: Todo[] = [];
  wednesdayTodos: Todo[] = [];
  thursdayTodos: Todo[] = [];
  fridayTodos: Todo[] = [];

  todoInput: HTMLInputElement | null = null;
  mondayList: HTMLUListElement | null = null;
  tuesdayList: HTMLUListElement | null = null;
  wednesdayList: HTMLUListElement | null = null;
  thursdayList: HTMLUListElement | null = null;
  fridayList: HTMLUListElement | null = null;

  ngOnInit() {
    this.todoInput = document.getElementById('todo-input') as HTMLInputElement;
    this.mondayList = document.getElementById('monday-list') as HTMLUListElement;
    this.tuesdayList = document.getElementById('tuesday-list') as HTMLUListElement;
    this.wednesdayList = document.getElementById('wednesday-list') as HTMLUListElement;
    this.thursdayList = document.getElementById('thursday-list') as HTMLUListElement;
    this.fridayList = document.getElementById('friday-list') as HTMLUListElement;

    this.renderTodos('monday');
    this.renderTodos('tuesday');
    this.renderTodos('wednesday');
    this.renderTodos('thursday');
    this.renderTodos('friday');
  }

  addTodo(): void {
    if (this.todoInput) {
      const todoText: string = this.todoInput.value.trim();
      const selectedDay: string = (document.querySelector('input[name="day"]:checked') as HTMLInputElement)?.value || 'monday';

      if (todoText !== '') {
        const todo: Todo = {
          id: Date.now(),
          text: todoText,
          day: selectedDay
        };

        switch (selectedDay) {
          case 'monday':
            this.mondayTodos.push(todo);
            this.renderTodos('monday');
            break;
          case 'tuesday':
            this.tuesdayTodos.push(todo);
            this.renderTodos('tuesday');
            break;
          case 'wednesday':
            this.wednesdayTodos.push(todo);
            this.renderTodos('wednesday');
            break;
          case 'thursday':
            this.thursdayTodos.push(todo);
            this.renderTodos('thursday');
            break;
          case 'friday':
            this.fridayTodos.push(todo);
            this.renderTodos('friday');
            break;
          default:
            break;
        }

        if (this.todoInput) {
          this.todoInput.value = '';
        }
      }
    }
  }

  renderTodos(day: string): void {
    let todoList: HTMLUListElement | null = null;
    let todos: Todo[] = [];
  
    switch (day) {
      case 'monday':
        todoList = this.mondayList;
        todos = this.mondayTodos;
        break;
      case 'tuesday':
        todoList = this.tuesdayList;
        todos = this.tuesdayTodos;
        break;
      case 'wednesday':
        todoList = this.wednesdayList;
        todos = this.wednesdayTodos;
        break;
      case 'thursday':
        todoList = this.thursdayList;
        todos = this.thursdayTodos;
        break;
      case 'friday':
        todoList = this.fridayList;
        todos = this.fridayTodos;
        break;
      default:
        break;
    }
  
    if (todoList) {
      todoList.innerHTML = '';
      todos.forEach(todo => {
        const li: HTMLLIElement = document.createElement('li');
        li.innerHTML = `
          ${todo.text}
          <span class="delete-btn" (click)="deleteTodo(${todo.id}, '${day}')">X</span>
        `;
        todoList?.appendChild(li);
      });
    }
  }
    
  deleteTodo(todoId: number, day: string): void {
    let todos: Todo[] = [];

    switch (day) {
      case 'monday':
        this.mondayTodos = this.mondayTodos.filter(todo => todo.id !== todoId);
        todos = this.mondayTodos;
        break;
      case 'tuesday':
        this.tuesdayTodos = this.tuesdayTodos.filter(todo => todo.id !== todoId);
        todos = this.tuesdayTodos;
        break;
      case 'wednesday':
        this.wednesdayTodos = this.wednesdayTodos.filter(todo => todo.id !== todoId);
        todos = this.wednesdayTodos;
        break;
      case 'thursday':
        this.thursdayTodos = this.thursdayTodos.filter(todo => todo.id !== todoId);
        todos = this.thursdayTodos;
        break;
      case 'friday':
        this.fridayTodos = this.fridayTodos.filter(todo => todo.id !== todoId);
        todos = this.fridayTodos;
        break;
      default:
        break;
    }

    this.renderTodos(day);
  }
}
