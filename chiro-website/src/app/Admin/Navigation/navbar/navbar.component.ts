import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OverviewPageComponent } from '../../Overview/overview-page/overview-page.component';
import { AdminService } from '../../admin.service';
import { Users } from '../../../Model/Users';
import { HomeService } from '../../../Home/home.service';
import { Info } from '../../../Model/Info';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,
  OverviewPageComponent

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent implements OnInit{

  
  sideBarColor!: string
  
  user!: Users[];
  users: Users[] = []
  infos: Info[] = []
  loggedUN!: any
  

  constructor(private as : AdminService, private hs : HomeService) {}

  ngOnInit(): void {
    this.hs.getInfo().subscribe((data : Info[]) => {
      this.infos = data
    })
    this.loggedUN = this.as.getLoggedUser()
    this.as.getUserByName(this.loggedUN).subscribe((data : Users[]) => {
      this.user = data
      this.sideBarColor = this.as.checkAfdelingColor(this.user[0]);
    }) 
  }

}
