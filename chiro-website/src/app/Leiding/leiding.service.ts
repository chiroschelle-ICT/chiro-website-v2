import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Model/Users';
import { Info } from '../Model/Info';

@Injectable({
  providedIn: 'root'
})
export class LeidingService {

  constructor(private http: HttpClient) { }

  private routeUsers = 'http://localhost:3000/api/users';
  private routeInfo = 'http://localhost:3000/api/info';


  // --- API CALLS ---
  // --- API CALLS ---

  // GET All Users
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.routeUsers);
  }
  // GET User per ID
  getUserPerID(Id:number): Observable<Users> {
    return this.http.get<Users>(this.routeUsers+"/${id}")
  }

  // GET All info
  getInfo(): Observable<Info[]> {
    return this.http.get<Info[]>(this.routeInfo)
  }
  // GET info of user
  getInfoById(Id: any): Observable<Info> {
    return this.http.get<Info>(this.routeInfo+"/${Id}");
  }
  // GET Info per userID
  getInfoPerUserId(id: any): Observable<Info> {
    return this.http.get<Info>(`${this.routeInfo}/getUserId/${id}`);
  }



}
