import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminService } from '../../Admin/admin.service';
import { LocalstorageService } from '../../Services/localstorage.service';
import { Users } from '../../Model/Users';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Afdeling } from '../../Model/Afdeling';

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

  signupForm = new FormGroup({
    username: new FormControl('', Validators.required),       // Users Table
    afdelingId: new FormControl('', Validators.required),     // Users Table
    email: new FormControl('', [Validators.required, Validators.email]),  // Info Table
    phone: new FormControl('', Validators.required),  // Info Table
    isGroeps: new FormControl('', Validators.required),  // Info Table
    jaarLeiding: new FormControl('', Validators.required),  // Info Table
    leeftijd: new FormControl('', Validators.required),  // Info Table
  });


  afdelingen: Afdeling[] = []
  sideBarColor!: string;
  loggedUN!: string;
  isFormVlaid: boolean = false

  constructor(private as : AuthService, private ads : AdminService, private lss : LocalstorageService) {}

  ngOnInit() {
    this.loggedUN = this.lss.getData("usr");
    this.as.getUserByName(this.loggedUN).subscribe((data : Users) => {
      this.sideBarColor = this.ads.checkAfdelingColor(data);
    });
    this.ads.getAfdelingen().subscribe((data : Afdeling[]) => {
      this.afdelingen = data
      console.log(this.afdelingen)
    })
  }

  onSignUp() {

  }

}
