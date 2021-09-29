import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private baseUrl = "http://localhost:5000/api/funcionario"
  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Funcionario>{
    return this.http.get<Funcionario>(`${this.baseUrl}/getbyid/${id}`)
  }

  list(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${this.baseUrl}/list`)
  }
  create(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(`${this.baseUrl}/create`, funcionario)
  }

  save(funcionario: Funcionario): Observable<Funcionario>{
    if(funcionario.id){
      return this.http.put<Funcionario>(`${this.baseUrl}/update`, funcionario)    
    }
    console.log(funcionario);
    return this.http.post<Funcionario>(`${this.baseUrl}/create`, funcionario)
    }
}  