import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from '../Model/Users';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  public isAuth = new BehaviorSubject<boolean>(false);

  private baseUsersRoute = 'http://localhost:3000/api/users';

  // API call to retrieve data
  getUserByName(un:string) : Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUsersRoute+"/searchName/"+`${un}`);
  }

  // --  LocalStorage  --
  /*
   login(username: string, password: string, user : Users[]):boolean {
    if(username == user[0].username && password == user[0].password) {
      localStorage.setItem('isLoggedin', 'true')
      localStorage.setItem('username', username)
      this.isAuth.next(true)
      return true
    }
    return false
  }

  logout() {
    localStorage.removeItem('isLoggedin')
    localStorage.removeItem('username')
    this.isAuth.next(false)
  }

  getLoggedUser() {
    return localStorage.getItem('username')    
  }

  getUserWithLocalStorage() : Observable<Users[]>{
    return this.http.get<Users[]>(this.baseUsersRoute+"/searchname/"+`${localStorage.getItem('username')}`);
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true'
  }
 */

}

