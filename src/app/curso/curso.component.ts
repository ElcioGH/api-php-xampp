import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  vetor: Curso[] = [];

  //Construtor
  constructor(private cursoService:CursoService) {}
  
  //Inicializador
  ngOnInit() {
    //Ao iniciar o sistema, deverá listar os cursos
    this.selecao();
  }

  // Objeto da classe Curso
  curso: Curso = new Curso(); // Adicionando o objeto curso da classe Curso

  // Seleção
  selecao() {
    this.cursoService.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
        console.log(this.vetor);
      },
      (error) => {
        console.error('Erro ao obter cursos:', error);
      }
    );
    
  }

  

  // Cadastro
  cadastro(): void {
    alert("Cadastro");
  }

  

  // Alterar
  alterar(): void {
    alert("Alterar");
  }

  // Remover
  remover(): void {
    alert("Remover");
  }

}



