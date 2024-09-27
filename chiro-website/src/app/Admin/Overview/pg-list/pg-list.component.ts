<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Stashed changes
import { Programma } from '../../../Model/Programma';
import { Afdeling } from '../../../Model/Afdeling';
import { AdminService } from '../../admin.service';
import { Users } from '../../../Model/Users';
<<<<<<< Updated upstream
=======
import { LocalstorageService } from '../../../Services/localstorage.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-pg-list',
  standalone: true,
  imports: [],
  templateUrl: './pg-list.component.html',
  styleUrl: './pg-list.component.css'
})
<<<<<<< Updated upstream
export class PgListComponent {

  programmas: Programma[] = []
  afdelingen: Afdeling[] = []
  user: Users[] = []
  loggedUN!: any

  constructor(private as : AdminService) {
    this.loggedUN = this.as.getLoggedUser();
    this.as.getUserByName(this.loggedUN).subscribe((data : Users[]) => {
      this.user = data;
    })    
    this.as.getProgrammaByAfdeling(this.user[0].AfdelingId).subscribe((data : Programma[]) =>{
      this.programmas = data
      console.log(this.programmas)
    }) 
=======
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
    
>>>>>>> Stashed changes
  }

}
