import { Component, OnInit } from '@angular/core';
import { Blogposts } from '../../Model/Blogposts';
import { HomeService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from '../home.module';
import { Category } from '../../Model/Category';
import { NgStyle } from '@angular/common';
import { Info } from '../../Model/Info';
import { Users } from '../../Model/Users';

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
  categories: Category[] = [];
  infos: Info[] = [];
  users: Users[] = [];
  cat!: Category;

  constructor(private homeService : HomeService) {}

  ngOnInit() {
    this.homeService.getBlogposts().subscribe((data: Blogposts[]) => {
      this.blogposts = data;
    });
    this.homeService.getCategory().subscribe((data : Category[]) => {
      this.categories = data;
    });
    this.homeService.getInfo().subscribe((data : Info[]) => {
      this.infos = data;
    });
    this.homeService.getUsers().subscribe((data : Users[]) => {
      this.users = data;
    })
  }


}

