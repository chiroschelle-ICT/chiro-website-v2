import { Component } from '@angular/core';
// Components
import { BlogpostComponent } from '../blogpost/blogpost.component';
import { BlogpostV2Component } from '../blogpost-v2/blogpost-v2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BlogpostComponent,
    BlogpostV2Component
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
