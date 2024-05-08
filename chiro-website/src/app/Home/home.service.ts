import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Blogposts } from '../Model/Blogposts';
import { Category } from '../Model/Category';
import { Info } from '../Model/Info';
import { Users } from '../Model/Users';

@Injectable({
  providedIn: 'root'
})


export class HomeService {

  constructor(private http: HttpClient) { }

  // Base API Routes
  private routeBlogposts = 'http://localhost:3000/api/blogPosts';
  private routeCategory = 'http://localhost:3000/api/category';
  private routeInfo = 'http://localhost:3000/api/info';
  private routeUser = 'http://localhost:3000/api/users';

  // --- API CALLS ---
  // --- API CALLS ---
  
  // -- Blogposts
  // GET All Blogposts
  getBlogposts(): Observable<Blogposts[]> {
    return this.http.get<Blogposts[]>(this.routeBlogposts)
  }
  // GET Blogposts per ID
  getBlogpostPerId(id:number): Observable<Blogposts> {
    return this.http.get<Blogposts>(this.routeBlogposts+"${id}")
  }

  // -- Category
  // GET Categiries per ID
  getCatPerId(id:number) : Observable<Category> {
    return this.http.get<Category>(this.routeCategory+`/${id}`);
  }
  // GET all categories
  getCategory() : Observable<Category[]> {
    return this.http.get<Category[]>(this.routeCategory);
  }

  // -- Info
  getInfo() : Observable<Info[]> {
    return this.http.get<Info[]>(this.routeInfo);
  }

  // -- Users
  getUsers() : Observable<Users[]> {
    return this.http.get<Users[]>(this.routeUser);
  }

}
