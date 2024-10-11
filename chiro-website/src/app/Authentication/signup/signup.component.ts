import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminService } from '../../Admin/admin.service';
import { LocalstorageService } from '../../Services/localstorage.service';
import { Users } from '../../Model/Users';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  sideBarColor!: string;
  loggedUN!: string;

  constructor(private as : AuthService, private ads : AdminService, private lss : LocalstorageService) {}

  ngOnInit() {
    this.loggedUN = this.lss.getData("usr");
    this.as.getUserByName(this.loggedUN).subscribe((data : Users) => {
      this.sideBarColor = this.ads.checkAfdelingColor(data);
    });
  }

}
