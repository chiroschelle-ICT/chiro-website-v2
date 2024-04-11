import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Model/Users';

@Injectable({
  providedIn: 'root'
})
export class LeidingService {

  constructor(private http: HttpClient) { }

  private routeUsers = 'http://localhost:3000/api/users';


  // --- API CALLS ---
  // --- API CALLS ---

  // GET All Users
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.routeUsers);
  }
  // GET User per ID
  getUserPerID(id:number): Observable<Users> {
    return this.http.get<Users>(this.routeUsers+"${id}")
  }

  


}
