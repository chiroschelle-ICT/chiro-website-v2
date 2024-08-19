import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Model/Users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Programma } from '../Model/Programma';
import { Blogposts } from '../Model/Blogposts';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  private baseUsersRoute = 'http://localhost:3000/api/users';
  private baseProgrammaRoute = 'http://localhost:3000/api/programma';
  private baseBlogpostsRoute = 'http://localhost:3000/api/blogPosts';

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
}
