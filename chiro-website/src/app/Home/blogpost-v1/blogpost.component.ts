import { Component, OnInit } from '@angular/core';
import { Blogposts } from '../../Model/Blogposts';
import { HomeService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-blogpost',
  standalone: true,
  imports: [
    HttpClientModule
  ],
  templateUrl: './blogpost.component.html',
  styleUrl: './blogpost.component.css'
})
export class BlogpostComponent implements OnInit{

  blogposts: Blogposts[] = [];

  constructor(private homeService : HomeService, private route : ActivatedRoute, private router : Router) {}

  ngOnInit() {
    this.homeService.getBlogposts().subscribe((data: Blogposts[]) => {
      this.blogposts = data;
    })
  }


}
