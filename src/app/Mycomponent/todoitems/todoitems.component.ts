import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { AddtodoComponent } from "../addtodo/addtodo.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todoitems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todoitems.component.html',
  styleUrl: './todoitems.component.css'
})
export class TodoitemsComponent {


  @Input() todo!: Todo
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter()
  @Output() todoCheckBox: EventEmitter<Todo>=new EventEmitter()
  
  onClick(todo:Todo) {
    console.log("onclick is triggered  ")
    this.todoDelete.emit(todo)
   }
   onCheckboxClick(todo: Todo) {
     this.todoCheckBox.emit(todo)
   }
}
