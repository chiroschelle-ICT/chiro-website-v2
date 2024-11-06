import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Model/Users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Programma } from '../Model/Programma';
import { Blogposts } from '../Model/Blogposts';
import { LocalstorageService } from '../Services/localstorage.service';
import { Goepie } from '../Model/Goepie';
import { Afdeling } from '../Model/Afdeling';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient, private localstorageservice : LocalstorageService) { }

  private baseUsersRoute = 'http://localhost:3000/api/users';
  private baseProgrammaRoute = 'http://localhost:3000/api/programma';
  private baseBlogpostsRoute = 'http://localhost:3000/api/blogPosts';
  private baseGoepieRoute = 'http://localhost:3000/api/goepie';
  private baseAfdelingRoute = 'http://localhost:3000/api/afdeling'
  
  // API call to retrieve data


  // --- Programma Actions  ---
  // --- Programma Actions  ---
  // GET |  programmas per afdeling --> Used for entering the existing data in the programma form
  getProgrammaByAfdeling(afdelingId : number) : Observable<Programma[]> {
    return this.http.get<Programma[]>(this.baseProgrammaRoute+"/getAfdelingId/"+`${afdelingId}`);
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
  // GET | Get All Blogposts
  getBlogposts() : Observable<Blogposts[]> {
    return this.http.get<Blogposts[]>(this.baseBlogpostsRoute);
  }
  // POST | Add a new Blogpost
  postBlogpost(title : string, description : string, userId : number, Image : string) : Observable<Blogposts> {
    const body = { title, description, userId, Image };
    return this.http.post<Blogposts>(this.baseBlogpostsRoute+"/addBlogpost", body);
  }
  // PUT | Edit blogpost
  putBlogpost(title : string, description : string, userId : number, Image : string, id : number) : Observable<Blogposts> {
    const body = { title, description, userId, Image };
    return this.http.put<Blogposts>(this.baseBlogpostsRoute+"/editBlogPost/"+`${id}`, body);
  }
  // DELETE | deletes a blogpost
  deleteBlogpost(id: string) : Observable<Blogposts> {
    return this.http.delete<Blogposts>(this.baseBlogpostsRoute+"/deletePost/"+`${id}`);
  }

  // --- User Actions
  // --- User Actions
  getUsers() : Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUsersRoute)
  }
  getUser(id: number) : Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUsersRoute+"/"+`${id}`)
  }
  getUserByName(un:string) : Observable<Users> {
    return this.http.get<Users>(this.baseUsersRoute+"/searchName/"+`${un}`);
  }
  getActiveUser() {
    const aUser = this.localstorageservice.getData("usr");
    return this.getUserByName(aUser)
  }

  // --- GOEPIE Actions ---
  // --- GOEPIE Actions ---
  // GET all goepies
  getGoepies(): Observable<Goepie[]> {
    return this.http.get<Goepie[]>(this.baseGoepieRoute);
  }
  // GET Goepie by ID 
  getGoepie(id : number): Observable<Goepie> {
    return this.http.get<Goepie>(this.baseGoepieRoute+"/"+`${id}`);
  }

  // -- PROGRAMMA Acctions --
  // -- PROGRAMMA Acctions --
  // GET | get Afdelingen
  getAfdelingen() : Observable<Afdeling[]> {
    return this.http.get<Afdeling[]>(this.baseAfdelingRoute);
  }

  // --- MISC Actions
  // --- MISC Actions
  // Returns the color belonging to the users's afgdeling
  checkAfdelingColor(usr : Users) {
    switch(usr.AfdelingId) {
      case 1:
      case 2:
        return "#a855f7";
      case 3:
      case 4:
        return "#eab308";
      case 5:
      case 6:
        return "#16a34a";
      case 7:
      case 8:
        return "#ef4444";
      case 9:
      case 10:
        return "#3b82f6";
      case 11:
      case 12:  // Changed from 10 to 11 to correct the overlap
        return "#d97706";
      case 13:
        return "#475569";
      default:
        return "#000000"; // Optional default case
    }
  }

  getAfdelingName(afId:number) {
    // API call or switch search
    
  }
  
}
