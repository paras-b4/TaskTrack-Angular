import { Routes } from '@angular/router';
import { TodoComponent } from './Mycomponent/todo/todo.component';
import { AboutComponent } from './Mycomponent/about/about.component';

export const routes: Routes = [
    {path: '', component: TodoComponent},
{path: 'about', component: AboutComponent},
];
