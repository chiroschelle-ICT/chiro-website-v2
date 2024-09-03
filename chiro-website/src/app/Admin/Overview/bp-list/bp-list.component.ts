import { Component, OnInit } from '@angular/core';
import { Blogposts } from '../../../Model/Blogposts';
import { AdminService } from '../../admin.service';
import { FormService } from '../../Forms/form.service';
import { Category } from '../../../Model/Category';

@Component({
  selector: 'app-bp-list',
  standalone: true,
  imports: [],
  templateUrl: './bp-list.component.html',
  styleUrl: './bp-list.component.css'
})
export class BpListComponent implements OnInit{

  blogposts: Blogposts[] = []
  categories: Category[] = []

  constructor(private adminserv : AdminService, private formserv : FormService) {}

  ngOnInit(): void {
    this.adminserv.getBlogposts().subscribe((data : Blogposts[]) => {
      this.blogposts = data
    })
    this.formserv.getCategories().subscribe((data : Category[]) => {
      this.categories = data
    }) 
  }



}
