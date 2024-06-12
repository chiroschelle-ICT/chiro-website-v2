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

  users: Users[] = [];
  user!: Users;

  username!: string;
  password!: string;

  inValidLogin: boolean =  false;

  responseMsg!: string;
  showRespondMsg: boolean = false;
  borderColor!: string;
  backgroundColor!: string;

  ngOnInit(): void {}


  //https://stackblitz.com/edit/angular-14-registration-login-example?file=src%2Fapp%2F_services%2Faccount.service.ts
  validateLogin(input : NgForm) {
    console.log("Pres")
    if(!input.value.username || !input.value.username.trim()) {
      this.inValidLogin = true;
      this.invalidLogin("Vul je gebruikersnaam in");
      console.log("No Name")
    } else if (!input.value.password || !input.value.password.trim()) {
      this.inValidLogin = true;
      this.invalidLogin("Vul je wachtwoord in");
      console.log("No pw")
    } else {
        console.log("Valid")
        console.log(this.username)
        this.inValidLogin = false;
        this.getUserData(input.value.username);
    } 

  }

  loginUser() {
    if (this.authservice.login(this.username, this.password, this.users)) {
      // Navigate to admin page
      this.validLogin("Ingelogd!");
      setTimeout(() => {
        this.router.navigate(['admin'])
      }, 1500)

    } else {
      this.invalidLogin("Foute gegevens")
    }
  }

  getUserData(input : NgForm) {
    this.authservice.getUserByName(this.username).subscribe((data : Users[]) => {
      this.users = data;
      console.log(this.users[0].username)
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
