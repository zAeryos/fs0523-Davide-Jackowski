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

  getCompletedTodos(): Promise<Todo[]> {
    const completedUrl = `${this.baseUrl}?completed=true`;
    return fetch(completedUrl).then(res => res.json());
  }

  getUncompletedTodos(): Promise<Todo[]> {
    const completedUrl = `${this.baseUrl}?completed=false`;
    return fetch(completedUrl).then(res => res.json());
  }

  getById(id:number | string):Promise<Todo>{
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

  deleteTodo(id:string | number):Promise<Todo>{
    return fetch(this.baseUrl + `/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => res.json())
  }

  toggleTodoCompleted(id: string | number): Promise<Todo> {
    return this.getById(id).then(todo => {
      const updatedTodo = { ...todo, completed: !todo.completed };
      return this.updateTodo(updatedTodo);
    });
  }
}
