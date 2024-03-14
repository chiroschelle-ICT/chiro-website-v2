import { Component, OnInit } from '@angular/core';
// imports
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Components
import { BlogpostComponent } from '../blogpost-v1/blogpost.component';
import { Blogposts } from '../../Model/Blogposts';
import { HomeService } from '../home.service';

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
    blogposts: Blogposts[] = [];

    constructor(private homeService : HomeService) {}
  
    ngOnInit() {
      this.homeService.getBlogposts().subscribe((data: Blogposts[]) => {
        this.blogposts = data;
        console.log(this.blogposts)
      })
    }
  
}
