import { Injectable } from '@angular/core';
import { listaDePersonagens } from 'src/services/lista-de-personagens.service';

@Injectable({
  providedIn: 'root'
})
export class MashupService {

  personagem = '';

  grupo: number = 0;
  grupoEscolhido: any[] = [];
  
  escolhidos: string[] = [];
  showConstrucao: boolean = false;

  poder_1: string = '';
  poder_2: string = '';

  fraqueza_1: string = '';
  fraqueza_2: string = '';

  personalidade_1: string = '';
  personalidade_2: string = '';

  listaDePersonagens = listaDePersonagens;

  constructor() { }
}
