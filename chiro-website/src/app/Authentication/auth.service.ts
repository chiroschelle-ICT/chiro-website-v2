import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from '../Model/Users';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LocalstorageService } from '../Services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor(private http : HttpClient, private localstorageservice : LocalstorageService) { }


  public isAuth = new BehaviorSubject<boolean>(false);

  private baseUsersRoute = 'http://localhost:3000/api/users';

  // API call to retrieve data
  getUserByName(un:string) : Observable<Users> {
    return this.http.get<Users>(this.baseUsersRoute+"/searchName/"+`${un}`);
  }

  // --  LocalStorage  --
  login(username: string, password: string, user : Users) {
    if(username == user.username && password == user.password) {
      this.localstorageservice.saveData('usr',  username)
      this.isAuth.next(true)
      return true 
    }
    return false
  }
}
