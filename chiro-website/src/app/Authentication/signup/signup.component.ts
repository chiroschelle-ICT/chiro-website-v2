import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminService } from '../../Admin/admin.service';
import { LocalstorageService } from '../../Services/localstorage.service';
import { Users } from '../../Model/Users';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  signupForm: FormGroup;

  afdelingen: Afdeling[] = []
  sideBarColor!: string;
  loggedUN!: string;

  constructor(private as : AuthService, private ads : AdminService, private lss : LocalstorageService, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],       // Users Table
      name: ['', Validators.required],       // Users Table
      afdelingId: ['', Validators.required],     // Users Table
      password: ['', Validators.required], // Users Table
      email: ['', Validators.required],  // Info Table
      phone: ['', Validators.required],  // Info Table
      jaarLeiding: ['', Validators.required],  // Info Table
      isGroeps: ['', Validators.required],  // Info Table
      leeftijd: ['', Validators.required],  // Info Table
    });
  }

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

  onSignUp(data: FormGroup) {
    console.log(data.value.password)
    data.value.password = this.lss.encrypt(data.value.password);
    console.log(data.value.password)
    const usersData = [
      data.value.username,
      data.value.name,
      data.value.afdelingId,
      data.value.password,
    ]
    const infoData = [
      data.value.email,
      data.value.phone,
      data.value.isGroeps,
      data.value.jaarLeiding,
      data.value.leeftijd,
    ]
    this.as.addUser(usersData).subscribe()
    // this.as.addInfo(infoData).subscribe()


  }

}
