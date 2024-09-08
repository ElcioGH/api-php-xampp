import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  // URL
  url = "http://localhost/api/php/";

  // Vetor
  vetor: Curso[] = [];

  // Construtor
  constructor(private http: HttpClient) { }

  // Obter todos os cursos
obterCursos(): Observable<Curso[]> {
  return this.http.get<{ curso: Curso[] }>(`${this.url}listar`).pipe(
    map((res) => res.curso)
  );
}

}

