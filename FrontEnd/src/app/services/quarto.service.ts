import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quarto } from '../models/Quarto';

@Injectable({
  providedIn: 'root'
})
export class QuartoService {
  private baseUrl = "http://localhost:5000/api/quarto"
  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Quarto>{
    return this.http.get<Quarto>(`${this.baseUrl}/getbyid/${id}`)
  }

  list(): Observable<Quarto[]>{
    return this.http.get<Quarto[]>(`${this.baseUrl}/list`)
  }
  create(quarto: Quarto): Observable<Quarto>{
    return this.http.post<Quarto>(`${this.baseUrl}/create`, quarto)
  }

  save(quarto: Quarto): Observable<Quarto>{
    if(quarto.id){
      return this.http.put<Quarto>(`${this.baseUrl}/update`, quarto)    
    }
    console.log(quarto);
    return this.http.post<Quarto>(`${this.baseUrl}/create`, quarto)
  }

  delete(quarto: Quarto): Observable<Quarto>{
    return this.http.delete<Quarto>(`${this.baseUrl}/delete/${quarto.id}`)
  }
}
