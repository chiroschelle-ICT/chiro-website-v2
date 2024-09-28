import { Component, OnInit } from '@angular/core';
import { Programma } from '../../../Model/Programma';
import { Afdeling } from '../../../Model/Afdeling';
import { AdminService } from '../../admin.service';
import { Users } from '../../../Model/Users';
import { LocalstorageService } from '../../../Services/localstorage.service';

@Component({
  selector: 'app-pg-list',
  standalone: true,
  imports: [],
  templateUrl: './pg-list.component.html',
  styleUrl: './pg-list.component.css'
})
export class PgListComponent implements OnInit{

  programmas: Programma[] = []
  afdelingen: Afdeling[] = []
  loggedUN!: any

  constructor(private as : AdminService, private lss : LocalstorageService) {}

  ngOnInit(): void {
    this.loggedUN = this.lss.getData("usr");
    this.as.getUserByName(this.loggedUN).subscribe((data : Users) => {
      this.as.getProgrammaByAfdeling(data.AfdelingId).subscribe((data : Programma[]) => {
        this.programmas = data
      })
    })
    
  }

}
