import { Component } from '@angular/core';
import { TodoComponent } from "./Mycomponent/todo/todo.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule]
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


// }
}


