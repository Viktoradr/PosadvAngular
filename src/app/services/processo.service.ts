import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProcesso } from '../interfaces/processo.interface';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  constructor(public http: HttpClient) { }

  // getAll(): Observable<IProcesso[]> {
  //   return this.http
  //     .get<IProcesso[]>(`${environment.baseUrl}/processos`);
  // }

  getProcesso() {

  }

  cadastrar() {

  }

  editar() {

  }

  excluir() {

  }
}
