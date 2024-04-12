import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../../Model/Users';
import { LeidingService } from '../leiding.service';
import { Info } from '../../Model/Info';

@Component({
  selector: 'app-leiding-card-v3',
  standalone: true,
  imports: [],
  templateUrl: './leiding-card-v3.component.html',
  styleUrl: './leiding-card-v3.component.css'
})
export class LeidingCardV3Component implements OnInit{
  @Input() FilteredUsers!: Users[]
  copyUsers = this.FilteredUsers

  infoUsers!: Info
  users: Users[] = []

  constructor(private LeidingServ : LeidingService) {}

  ngOnInit(): void {
    this.getInfo()
  }
  i :number = 1
  getInfo() {
    this.LeidingServ.getUsers().subscribe((dataUsers: Users[]) => {
      this.users = dataUsers
      this.FilteredUsers.forEach(user => {
        this.LeidingServ.getInfoPerUserId(1).subscribe((dataInfo: Info) => {
            this.infoUsers = dataInfo
            console.log("USER : ")
            console.log(user)
            console.log("INFO : ")
            // Postman returns data but not here FIX THIS SHIT
            console.log(this.infoUsers)
            console.log("COUNTER : "+this.i)
            console.log("------------------")
            this.i += 1
        }) 
      })  
    })
  }


}
