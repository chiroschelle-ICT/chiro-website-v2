import { Component, OnInit } from '@angular/core';
import { Users } from '../../Model/Users';
import { AuthService } from '../../Authentication/auth.service';
// Phone Components
import { NavbarComponent } from '../Phone-components/navbar/navbar.component';
import { MainComponent } from '../Phone-components/main/main.component';
// Tablet components
import { MainTabletComponent } from '../Tablet-components/main-tablet/main-tablet.component';
import { NavbarTabletComponent } from '../Tablet-components/navbar-tablet/navbar-tablet.component';
// Desktop components
import { MainDesktopComponent } from '../Desktop-components/main-desktop/main-desktop.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    NavbarComponent,
    MainComponent,
    MainTabletComponent,
    NavbarTabletComponent,
    MainDesktopComponent
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent implements OnInit{

  user!: Users;
  users: Users[] = [];

  constructor(private auth : AuthService) {}

  ngOnInit(): void {
    /* this.auth.getUserWithLocalStorage().subscribe((data : Users) => {
      this.user = data;        
      console.log(this.user)
    }) */
  }




  


} 