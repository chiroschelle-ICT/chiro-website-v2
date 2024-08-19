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

  timeDifference!: any;  
  currentDate = new Date();

  dateShow!: string

  constructor(private homeService : HomeService) {}

  ngOnInit() {
    this.homeService.getBlogposts().subscribe((data: Blogposts[]) => {
      this.blogposts = data;
      for(let i = 0; i<this.blogposts.length; i++) {
        this.calculateTimeDifference(i);
      }
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

  calculateTimeDifference(id:number) {
    // Assuming dateTimeDb and dateTimeNow are already defined
    const dateTimeDb = new Date(this.blogposts[id].timePosted);
    const dateTimeNow = new Date(); // Get current date and time

    // Calculate the difference in milliseconds
    const timeDifferenceMs = dateTimeNow.getTime() - dateTimeDb.getTime();

    // Convert milliseconds to days, hours, and minutes
    const daysDifference = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((timeDifferenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));

    // Format the output
    const formattedDifference = `${daysDifference} : ${remainingHours} : ${remainingMinutes}`;

    console.log(formattedDifference); // Output: DD : HH : MM

    if(daysDifference <= 0 && remainingHours <= 0) {
      this.dateShow = "Net Gepost! "
      console.log(`${daysDifference}`)
    } else if (daysDifference <= 0) {
      this.dateShow = remainingHours + "Uur Geleden"
    }

  }




}

