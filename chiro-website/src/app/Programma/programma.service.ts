import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programma } from '../Model/Programma';

@Injectable({
  providedIn: 'root'
})
export class ProgrammaService {

  constructor(private http: HttpClient) { }

  private baseProgrammaRoute = 'http://localhost:3000/api/programma/';

  getProgramma(): Observable<Programma[]> {
    return this.http.get<Programma[]>(this.baseProgrammaRoute);
  }
  getProgrammaPerId(id:number): Observable<Programma> {
    return this.http.get<Programma>(this.baseProgrammaRoute+`${id}`);
  }

  getProgrammaPerAfdeling(afdId:number) : Observable<Programma[]> {
    return this.http.get<Programma[]>(this.baseProgrammaRoute+"getAfdelingId/"+`${afdId}`)
  }
}
