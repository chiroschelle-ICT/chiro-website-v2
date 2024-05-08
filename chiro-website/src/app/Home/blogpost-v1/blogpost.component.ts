import { Component, OnInit } from '@angular/core';
import { Blogposts } from '../../Model/Blogposts';
import { HomeService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from '../home.module';
import { Category } from '../../Model/Category';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-blogpost',
  standalone: true,
  imports: [
    HttpClientModule,
    HomeModule,
    NgStyle
  ],
  templateUrl: './blogpost.component.html',
  styleUrl: './blogpost.component.css'
})
export class BlogpostComponent implements OnInit{

  blogposts: Blogposts[] = [];
  cat!: Category;
  categories: Category[] = [];

  constructor(private homeService : HomeService) {}

  ngOnInit() {
    this.homeService.getBlogposts().subscribe((data: Blogposts[]) => {
      this.blogposts = data;
    })
    this.homeService.getCatPerId(1).subscribe((data: Category) => {
      this.cat = data;
    })
    this.homeService.getCategory().subscribe((data : Category[]) => {
      this.categories = data;
    })
  }


}

