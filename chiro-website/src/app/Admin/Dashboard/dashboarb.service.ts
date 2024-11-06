import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Programma } from '../../Model/Programma';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from '../../Services/localstorage.service';
import { Goepie } from '../../Model/Goepie';

@Injectable({
  providedIn: 'root'
})
export class DashboarbService {

  constructor(private http : HttpClient, private lss : LocalstorageService) { }

  private baseProgrammaRoute = 'http://localhost:3000/api/programma';

  // Programma 
  getNearestProgramma() : Observable<Programma[]> {       // For Porgramma Panel
    return this.http.get<Programma[]>(this.baseProgrammaRoute+"/getClosest");
  }

 
}
