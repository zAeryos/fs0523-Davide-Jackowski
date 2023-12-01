import { Component } from '@angular/core';
import { TodosService } from '../../todos.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  baseUrl:string = 'http://localhost:3000/todos';
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

  deleteTodo(id:string|number):Promise<Todo>{
    return fetch(this.baseUrl + `/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => res.json())
  }

}
