import { Component } from '@angular/core';
import { TodosService } from '../../todos.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  todos:Todo[] = []

  constructor(private todosSvc:TodosService){}

  ngOnInit(){
    this.todosSvc.getAllTodos().then(todo => this.todos = todo)
  }

  newTodo:Partial<Todo> = {
    completed: '0'
  };

  loading:boolean = false;

  saveTodo(){
    this.loading = true;
    this.newTodo.completed = Boolean(Number(this.newTodo.completed));
    this.todosSvc.createTodo(this.newTodo).then(red => {
      this.loading = false;
    })
  }
}
