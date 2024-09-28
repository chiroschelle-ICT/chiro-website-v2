import { Component, OnDestroy, OnInit } from '@angular/core';
import { Users } from '../../Model/Users';
import { AuthService } from '../../Authentication/auth.service';
import { RouterModule } from '@angular/router';
// Componentens
import { NavbarComponent } from '../Navigation/navbar/navbar.component';
// Form Components
import { FormSelectorComponent } from '../Forms/!form-selector/form-selector.component';
import { NavigationService } from '../../Navigation/navigation.service';


@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    FormSelectorComponent,
    RouterModule,
    NavbarComponent,
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent implements OnInit, OnDestroy {

  user!: Users;
  users: Users[] = [];

  constructor(private auth : AuthService, private navserv : NavigationService) {}

  ngOnInit(): void {
    this.navserv.hideHeader();
  }

  ngOnDestroy() {
    this.navserv.showHeader();
  }


  


} 