import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Model/Users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Programma } from '../Model/Programma';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  private baseUsersRoute = 'http://localhost:3000/api/users';
  private baseProgrammaRoute = 'http://localhost:3000/api/programma';

  getUser(id: number) : Observable<Users> {
    return this.http.get<Users>(this.baseUsersRoute+"/"+`${id}`)
  }
  
  // API call to retrieve data
  getUserByName(un:string) : Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUsersRoute+"/searchName/"+`${un}`);
  }

  // --- Programma Actions  ---
  // --- Programma Actions  ---
  // GET |  programmas per afdeling --> Used for entering the existing data in the programma form
  getProgrammaByAfdeling(afdelingId : number) : Observable<Programma> {
    return this.http.get<Programma>(this.baseProgrammaRoute+"/getAfdelingId/"+`${afdelingId}`);
  }
  // POST | Add's new programma
  postProgramma(afdelingId  : number, programma : string, datum : Date) : Observable<Programma>{
    const body = { afdelingId, programma, datum};  
    return this.http.post<Programma>(this.baseProgrammaRoute+"/postProgramma", body);    
  }
  // PUT | Updates a prgramma
  putProgramma(pId: number, afdelingId : number, programma : string, datum : Date ) : Observable<Programma>{
    const body = { afdelingId, programma, datum};  
    return this.http.put<Programma>(this.baseProgrammaRoute+"/putProgramma/" +`${pId}`, body);
  }
  // DELETE | Deletes a programma
  deleteProgramma(Id : number) : Observable<Programma> {
    return this.http.delete<Programma>(this.baseProgrammaRoute+"/deleteProgramma/"+`${Id}`);
  }


  // --- Blogpost Actions ---
  // --- Blogpost Actions ---


  
}
