import { Reserva } from './../models/Reserva';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private baseUrl = "http://localhost:5000/api/reserva"
  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Reserva>{
    return this.http.get<Reserva>(`${this.baseUrl}/getbyid/${id}`)
  }

  list(): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${this.baseUrl}/list`)
  }
  create(reserva: Reserva): Observable<Reserva>{
    return this.http.post<Reserva>(`${this.baseUrl}/create`, reserva)
  }

  save(reserva: Reserva): Observable<Reserva>{
    if(reserva.id){
      return this.http.put<Reserva>(`${this.baseUrl}/update`, reserva)    
    }
    console.log(reserva);
    return this.http.post<Reserva>(`${this.baseUrl}/create`, reserva)
  }

  delete(reserva: Reserva): Observable<Reserva>{
    return this.http.delete<Reserva>(`${this.baseUrl}/delete/${reserva.id}`)
  }
}
