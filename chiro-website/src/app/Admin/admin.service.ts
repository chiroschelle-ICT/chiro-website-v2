import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Model/Users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  private baseUsersRoute = 'http://localhost:3000/api/users';

  getUser(id: number) : Observable<Users> {
    return this.http.get<Users>(this.baseUsersRoute+"/"+`${id}`)
  }
  
  // API call to retrieve data
  getUserByName(un:string) : Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUsersRoute+"/searchName/"+`${un}`);
  }
}
