import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Model/Users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  private baseUsersRoute = 'http://localhost:3000/api/users';

  getUserByName(name:string) : Observable<Users> {
    return this.http.get<Users>(this.baseUsersRoute+"/searchName/"+`${name}`);
  }

}
