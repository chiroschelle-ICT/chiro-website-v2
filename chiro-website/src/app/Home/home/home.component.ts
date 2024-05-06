import { Component, OnInit } from '@angular/core';
// imports
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Components
import { BlogpostComponent } from '../blogpost-v1/blogpost.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        HttpClientModule,
        BlogpostComponent
    ]
})
export class HomeComponent implements OnInit {
  
    ngOnInit() {
     
    }
  
}
