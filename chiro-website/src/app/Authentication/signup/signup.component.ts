import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminService } from '../../Admin/admin.service';
import { LocalstorageService } from '../../Services/localstorage.service';
import { Users } from '../../Model/Users';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  signupForm = new FormControl({
  });

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
