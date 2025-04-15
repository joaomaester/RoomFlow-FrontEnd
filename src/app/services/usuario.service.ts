import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../Interfaces/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private readonly http: HttpClient) { }

<<<<<<< HEAD
  private url = 'https://roomflow-api.tccnapratica.com.br/usuario/listar';
=======
   private url = 'https://roomflow-api.tccnapratica.com.br/usuario/listar';
>>>>>>> 52eb728 (atualizacao do codigo)

  getUsers() : Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this.url);
  }
}
