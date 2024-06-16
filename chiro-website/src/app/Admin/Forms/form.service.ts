import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogposts } from '../../Model/Blogposts';
import { HttpClient } from '@angular/common/http';
import { Programma } from '../../Model/Programma';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  // TODO make deticated file for the routes
  private routeBlogposts = 'http://localhost:3000/api/blogPosts';
  private routeProgramma= 'http://localhost:3000/api/programma';

  // --- BLOGPOST Functions
  // Add new Blogpost
  addBlogpost(userId:number, title:string, description:string, Image:string, link:string, category:number, timePosted:Date, HasLink:number) :Observable<Blogposts> 
  {
    console.log("RATTE");
    const body = { userId, title, description, Image, link, category, timePosted, HasLink };
    return this.http.post<Blogposts>(this.routeBlogposts+"/addBlogpost", body)
  } 
  
  // --- PROGRAMMA Functions
  // Add new programma
  addProgramma(afdelingId:number, programma:string, datum:Date) : Observable<Programma>{
    const body = { afdelingId, programma, datum  };
    return this.http.post<Programma>(this.routeProgramma+"/postProgramma", body);
  }

}
