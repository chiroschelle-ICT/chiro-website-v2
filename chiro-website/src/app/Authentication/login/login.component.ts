import { Component, OnInit } from '@angular/core';
import { Users } from '../../Model/Users';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  constructor(private authservice : AuthService) {}

  users: Users[] = [];
  user!: Users;

  email!: string;
  password!: string;

  validLogin: boolean =  false;

  responseMsg!: string;

  ngOnInit(): void {}

  validateLogin(input : NgForm) {
    console.log("Pressed");
    this.authservice.getUserByName("killian").subscribe((data : Users) => {
      console.log(data);
    })
  }

}
