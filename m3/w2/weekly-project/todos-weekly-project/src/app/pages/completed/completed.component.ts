import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {

  todos:          Todo[]    = []
  loadingScreen:  boolean   = false;

  constructor(private todosSvc:TodosService){}

  ngOnInit(){
    this.loadingScreen    = true;
    this.todosSvc.getCompletedTodos().then(todo => {
      this.todos          = todo
      this.loadingScreen  = false
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
