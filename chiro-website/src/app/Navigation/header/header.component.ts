import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isMenuOpen: boolean = false;

  isHeaderVisible: boolean = true

  constructor(private navserv : NavigationService) {}

  ngOnInit() {
    this.navserv.headerVisible$.subscribe(visible => {
      this.isHeaderVisible = visible
    })
  }

  toggleMenu() {    
  this.isMenuOpen = !this.isMenuOpen;
  }
}
