import { Component, OnInit } from '@angular/core';
import { Goepie } from '../../../Model/Goepie';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-gp-list',
  standalone: true,
  imports: [],
  templateUrl: './gp-list.component.html',
  styleUrl: './gp-list.component.css'
})
export class GpListComponent implements OnInit {

  goepies: Goepie[] = []

  constructor(private as : AdminService) {}

  ngOnInit(): void {
    this.as.getGoepies().subscribe((data : Goepie[]) => {
      this.goepies = data
    })
  }

}
