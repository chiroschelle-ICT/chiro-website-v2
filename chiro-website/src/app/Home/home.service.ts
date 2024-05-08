import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Blogposts } from '../Model/Blogposts';
import { Category } from '../Model/Category';

@Injectable({
  providedIn: 'root'
})

//[ngStyle]="{'border': '2px solid ' + categories[$index].color, 'background-color': categories[$index].bgColor}"

export class HomeService {

  constructor(private http: HttpClient) { }

  // Base API Routes
  private routeBlogposts = 'http://localhost:3000/api/blogPosts';
  private routeCategory = 'http://localhost:3000/api/category';


  // --- API CALLS ---
  // --- API CALLS ---
  
  // GET All Blogposts
  getBlogposts(): Observable<Blogposts[]> {
    return this.http.get<Blogposts[]>(this.routeBlogposts)
  }
  // GET Blogposts per ID
  getBlogpostPerId(id:number): Observable<Blogposts> {
    return this.http.get<Blogposts>(this.routeBlogposts+"${id}")
  }

  // get Categiries per ID
  getCatPerId(id:number) : Observable<Category> {
    return this.http.get<Category>(this.routeCategory+`/${id}`);
  }
  // get all categories
  getCategory() : Observable<Category[]> {
    return this.http.get<Category[]>(this.routeCategory);
  }


}
