import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./Mycomponent/todo/todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TodoComponent]
})
export class AppComponent {
  title = 'paras1';
todo: any;
//   name:string='Paras'
//  constructor()
//  {
//    setTimeout(()=>{
//      this.name='Paras Yadav'
//    },2000)

   
 }


