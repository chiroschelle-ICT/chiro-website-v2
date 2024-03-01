import { Component } from '@angular/core';
// Components
import { BlogpostComponent } from '../blogpost-v1/blogpost.component';
import { BlogpostV2Component } from '../blogpost-v2/blogpost-v2.component';
import { BlogpostV3Component } from '../blogpost-v3/blogpost-v3.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BlogpostComponent,
    BlogpostV2Component,
    BlogpostV3Component
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
