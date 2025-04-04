import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Todo } from '../../Todo';
@Component({
  selector: 'app-addtodo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css'
})
export class AddtodoComponent {
  title!:string 
  desc!:string
 @Output() todoAdd :EventEmitter<Todo> =new EventEmitter()
  constructor()
  {
    
  }

onSubmit() {
  const todo={
   
    
    title: this.title,
    desc: this.desc,
    active: true
    
  }
  this.todoAdd.emit(todo)
   
}


}
