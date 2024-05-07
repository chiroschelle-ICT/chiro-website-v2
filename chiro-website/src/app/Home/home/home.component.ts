import { Component, OnInit } from '@angular/core';
// imports
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Components
import { BlogpostComponent } from '../blogpost-v1/blogpost.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        HttpClientModule,
        BlogpostComponent,
        CommonModule
    ]
})
export class HomeComponent implements OnInit {
  
    ngOnInit() {
     
    }
  
}
