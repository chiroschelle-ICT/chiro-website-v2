import { Component } from '@angular/core';
import { Programma } from '../../../Model/Programma';
import { Afdeling } from '../../../Model/Afdeling';
import { AdminService } from '../../admin.service';
import { Users } from '../../../Model/Users';

@Component({
  selector: 'app-pg-list',
  standalone: true,
  imports: [],
  templateUrl: './pg-list.component.html',
  styleUrl: './pg-list.component.css'
})
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
  }

}
