import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Blogposts } from '../Model/Blogposts';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  // Base API Routes
  private routeBlogposts = 'https://localhost:3000/api/blogposts';


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

}
