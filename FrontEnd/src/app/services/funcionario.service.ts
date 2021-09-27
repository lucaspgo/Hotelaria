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

  listFuncionario(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${this.baseUrl}/list`)
  }
  createFuncionario(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(`${this.baseUrl}/create`, funcionario)
  }
  loginFuncionario(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(`${this.baseUrl}/login`, funcionario)
  }
}
