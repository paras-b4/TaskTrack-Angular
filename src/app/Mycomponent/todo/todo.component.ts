import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoitemsComponent } from "../todoitems/todoitems.component";
import { AddtodoComponent } from "../addtodo/addtodo.component";
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoitemsComponent, AddtodoComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  localItem!:string
  todos!:Todo[]
  constructor()
  {
    this.localItem=localStorage.getItem("todos")||''
    if(this.localItem==null|| this.localItem=='')
    {
      this.todos=[]
    }
    else{
      this.todos=JSON.parse(this.localItem)

    }
   
  }
  deletetodo(todo: Todo) {
   console.log(todo)
   const index=this.todos.indexOf(todo)
   this.todos.splice(index,1)
   localStorage.setItem("todos",JSON.stringify(this.todos))
    }
  addtodo(todo:Todo) {
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
    }
    toggletodo(todo:Todo) {
      console.log(todo)
      const index=this.todos.indexOf(todo)
      this.todos[index].active=!this.todos[index].active
      console.log(todo.active)
      localStorage.setItem("todos",JSON.stringify(this.todos))
     
    }
      
  

}
