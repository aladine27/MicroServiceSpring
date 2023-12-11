import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloc } from '../models/bloc.model';
@Injectable({
  providedIn: 'root'
})
export class BlocServiceService {


   private baseUrl = 'http://localhost:8051/bloc';

  constructor(private http: HttpClient) { }

  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.baseUrl}/all-blocs`);
  } createChambre(chambre: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(`${this.baseUrl}/add`, chambre);
  }

  updateChambre( chambre: Bloc): Observable<any> {
    const url = `http://localhost:8051/chambre/modify`;
    return this.http.put(url, chambre);
  }

  deleteChambre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove/${id}`);
  }
  getChambre(id: number): Observable<Bloc> {
    return this.http.get<Bloc>(`${this.baseUrl}/retrieve/${id}`);
  }

}
