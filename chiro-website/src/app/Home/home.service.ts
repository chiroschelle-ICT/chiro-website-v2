import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogposts } from '../Model/blogposts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  // Base API Routes
  private routeBlogposts = 'https://localhost:3000/api/blogposts';


  // --- API CALLS ---
  // --- API CALLS ---
  
  // Get All Blogposts
  getBlogposts(): Observable<Blogposts[]> {
    return this.http.get<Blogposts[]>(this.routeBlogposts)
  }

}
