import { Component, OnInit } from '@angular/core';
import { Users } from '../../../Model/Users';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-gb-list',
  standalone: true,
  imports: [],
  templateUrl: './gb-list.component.html',
  styleUrl: './gb-list.component.css'
})
export class GbListComponent implements OnInit {

  gebruikers: Users[] = []

  constructor(private as : AdminService) {}

  ngOnInit(): void {
    this.as.getUsers().subscribe((data : Users[]) => {
      this.gebruikers = data
    })
  }

}
