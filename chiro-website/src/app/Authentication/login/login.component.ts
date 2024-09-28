import { Component, OnInit } from '@angular/core';
import { Users } from '../../Model/Users';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { catchError, throwError } from 'rxjs';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  constructor(private authservice : AuthService, private router : Router) {}

  users!: Users;
  user!: Users;

  username!: string;
  password!: string;

  inValidLogin: boolean =  false;

  responseMsg!: string;
  showRespondMsg: boolean = false;
  borderColor!: string;
  backgroundColor!: string;

  ngOnInit(): void {}

  validateLogin(input: NgForm) {
    if (!input.value.username || !input.value.username.trim()) {
      this.inValidLogin = true;
      this.invalidLogin("Vul je gebruikersnaam in"); // "Enter your username"
    } else if (!input.value.password || !input.value.password.trim()) {
      this.inValidLogin = true;
      this.invalidLogin("Vul je wachtwoord in"); // "Enter your password"
    } else {
      this.inValidLogin = false;
      this.getUserData(input);  // Pass the input to fetch user data
    }
  }
  

  loginUser() {
    if (this.authservice.login(this.username, this.password, this.users)) {
      this.validLogin("Ingelogd!"); // "Logged in!"
      setTimeout(() => {
        this.router.navigate(['admin']);
      }, 1500);
    } else {
      this.invalidLogin("Foute gegevens"); // "Incorrect details"
    }
  }
  

  getUserData(input : NgForm) {
    console.log(this.username)
    this.authservice.getUserByName(this.username).subscribe((data : Users) => {
      this.users = data;
      console.log(data )
      this.loginUser();
    })
  }
 


  validLogin(succesMsg : string) {
    this.clearResponse();
    this.backgroundColor = "#86efac";
    this.borderColor = "3px solid #10b981";
    this.responseMsg = succesMsg;
    this.showRespondMsg = true;
  }

  invalidLogin(errorMsg : string) {
    this.clearResponse();
    this.backgroundColor = "#fca5a5";
    this.borderColor = "3px solid #ef4444";
    this.responseMsg = errorMsg;
    this.showRespondMsg = true;
  }

  clearResponse() {

    this.backgroundColor = ""
    this.borderColor = ""
    this.responseMsg = "";
    this.showRespondMsg = false;
  }
}
