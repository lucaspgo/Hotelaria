import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = "http://localhost:5000/api/cliente"

  constructor(private http: HttpClient) { }
  getById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseUrl}/getbyid/${id}`)
  }

  list(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseUrl}/list`)
  }
  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.baseUrl}/create`, cliente)
  }

  save(cliente: Cliente): Observable<Cliente>{
    if(cliente.id){
      return this.http.put<Cliente>(`${this.baseUrl}/update`, cliente)    
    }
    console.log(cliente);
    return this.http.post<Cliente>(`${this.baseUrl}/create`, cliente)
  }

  delete(cliente: Cliente): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.baseUrl}/delete/${cliente.id}`)
  }
}
