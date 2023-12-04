import { Component } from '@angular/core';
import { TodosService } from '../../todos.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  baseUrl:        string    = 'http://localhost:3000/todos';
  todos:          Todo[]    = []
  loadingScreen:  boolean   = false
  loading:        boolean   = false;

  constructor(private todosSvc:TodosService){}

  ngOnInit(){
    this.loadingScreen    = true;
    this.todosSvc.getUncompletedTodos().then(todo => {
      this.todos          = todo
      this.loadingScreen  = false
    })
  }

  newTodo:Partial<Todo> = {
    completed: '0'
  };

  saveTodo(){
    this.loading = true;
    this.newTodo.completed = Boolean(Number(this.newTodo.completed));
    this.todosSvc.createTodo(this.newTodo).then(res => {
      this.todos.push(res);
      this.loading = false;
    })
  }

  delete(id:number) {
    if (!id) return;

    this.todosSvc.deleteTodo(id).then((res) => {
      this.todos = this.todos.filter(todos => todos.id != id)
    })
  }

  switchCompleteStatus(id: string | number){
    return this.todosSvc.toggleTodoCompleted(id);
  }

}
