import { Injectable } from '@angular/core';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  baseUrl:string = 'http://localhost:3000/todos';

  constructor() {}

  getAllTodos():Promise<Todo[]>{
    return fetch(this.baseUrl).then(res => res.json())
  }

  getById(id:string):Promise<Todo>{
    return fetch(this.baseUrl + `/${id}`).then(res => res.json())
  }

  createTodo(todo:Partial<Todo>):Promise<Todo>{
    return fetch(this.baseUrl,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    }).then(res => res.json())
  }

  updateTodo(todo:Partial<Todo>):Promise<Todo>{
    return fetch(this.baseUrl + `/${todo.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    }).then(res => res.json())
  }
}
