import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogposts } from '../../Model/Blogposts';
import { HttpClient } from '@angular/common/http';
import { Programma } from '../../Model/Programma';
import { Goepie } from '../../Model/Goepie';
import { Category } from '../../Model/Category';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  // TODO make deticated file for the routes
  private routeBlogposts = 'http://localhost:3000/api/blogPosts';
  private routeProgramma= 'http://localhost:3000/api/programma';
  private routeGoepie= 'http://localhost:3000/api/goepie';
  private routeCategory= 'http://localhost:3000/api/category';

  // --- BLOGPOST Functions
  // Add new Blogpost
  addBlogpost(userId:number, title:string, description:string, Image:string, link:string, category:number, timePosted:Date, HasLink:number) :Observable<Blogposts> 
  {
    const body = { userId, title, description, Image, link, category, timePosted, HasLink };
    return this.http.post<Blogposts>(this.routeBlogposts+"/addBlogpost", body)
  } 
  
  // --- PROGRAMMA Functions
  // Add new programma
  addProgramma(afdelingId:number, programma:string, datum:Date) : Observable<Programma>{
    const body = { afdelingId, programma, datum  };
    console.log(body)
    return this.http.post<Programma>(this.routeProgramma+"/postProgramma", body);
  }

  // --- GOEPIE Functions
  // Add new Goepie
  addGoepie(location:string, active:boolean) : Observable<Goepie> {
    const body = {location, active};
    return this.http.post<Goepie>(this.routeGoepie+"/addGoepie", body);
  }

  // Get all Categories
  getCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(this.routeCategory);
  }

}

