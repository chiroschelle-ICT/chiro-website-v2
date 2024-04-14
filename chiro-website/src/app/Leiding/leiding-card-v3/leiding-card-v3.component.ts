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


  infoUser!: Info
  infos: Info[] = []
  users: Users[] = []
  UserWithInfo: Users[] = []

  constructor(private LeidingServ : LeidingService) {}

  ngOnInit(): void {
  }
  i :number = 0
  getInfo() {
    this.LeidingServ.getUsers().subscribe((dataUsers: Users[]) => {
      this.users = dataUsers
      this.FilteredUsers.forEach(user => {
        this.LeidingServ.getInfoPerUserId(user.id).subscribe((dataInfo: Info) => {
            this.infoUser = dataInfo
           console.log(this.infoUser)
            this.i += 1
        }) 
      })  
    })
  }



}
