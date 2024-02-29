import { Component } from '@angular/core';
// Components
import { BlogpostComponent } from '../blogpost/blogpost.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BlogpostComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
