import { Component, ViewChild } from '@angular/core';
import { listaDePersonagens } from 'src/services/lista-de-personagens.service';
import { MashupService } from 'src/services/mashup.service';
import { DiceD20Component } from 'src/shared/dice-d20/dice-d20.component';
// import * as data from '../assets/mashup/personagens.json';
// const listaDePersonagens = data;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('dice_d10') dice_d10: DiceD20Component;
  @ViewChild('dice_d20') dice_d20: DiceD20Component;

  title = 'mashup-generator';

  haveIt: any[] = [];

  constructor(
    public _mashupService: MashupService
  ) { }

  rolld10(): void {
    this._mashupService.escolhidos = [];
    this.dice_d20.resetD20();
    this._mashupService.grupo = 0;
    this._mashupService.grupo = this.generateUniqueRandom(1, 10);
    this._mashupService.grupoEscolhido = listaDePersonagens.filter(x => x.grupo == this._mashupService.grupo);
  }

  rolld6(): void {
    if (this._mashupService.personagem.trim() == '') {
      alert("Escolha um personagem!");
      return;
    }

    if (this._mashupService.escolhidos.length < 3) {
      alert("Role 3d20!");
      return;
    }

    this._mashupService.construcao = [];

    var ranNum = this.generateUniqueRandom(1, 6);

    switch (ranNum) {
      case 1:
        this.setStringPoder(this._mashupService.escolhidos[0], this._mashupService.escolhidos[2]);
        this.setStringFraqueza(this._mashupService.escolhidos[2], this._mashupService.escolhidos[1]);
        this.setStringPersonalidade(this._mashupService.personagem, this._mashupService.escolhidos[1]);
        break;
      case 2:
        this.setStringPoder(this._mashupService.escolhidos[0], this._mashupService.escolhidos[1]);
        this.setStringFraqueza(this._mashupService.escolhidos[2], this._mashupService.personagem);
        this.setStringPersonalidade(this._mashupService.personagem, this._mashupService.escolhidos[0]);
        break;
      case 3:
        this.setStringPoder(this._mashupService.personagem, this._mashupService.escolhidos[1]);
        this.setStringFraqueza(this._mashupService.escolhidos[0], this._mashupService.escolhidos[2]);
        this.setStringPersonalidade(this._mashupService.escolhidos[1], this._mashupService.escolhidos[0]);
        break;
      case 4:
        this.setStringPoder(this._mashupService.escolhidos[2], this._mashupService.escolhidos[1]);
        this.setStringFraqueza(this._mashupService.escolhidos[0], this._mashupService.personagem);
        this.setStringPersonalidade(this._mashupService.escolhidos[2], this._mashupService.personagem);
        break;
      case 5:
        this.setStringPoder(this._mashupService.personagem, this._mashupService.escolhidos[2]);
        this.setStringFraqueza(this._mashupService.escolhidos[0], this._mashupService.escolhidos[1]);
        this.setStringPersonalidade(this._mashupService.escolhidos[2], this._mashupService.escolhidos[0]);
        break;
      case 6:
        this.setStringPoder(this._mashupService.personagem, this._mashupService.escolhidos[1]);
        this.setStringFraqueza(this._mashupService.personagem, this._mashupService.escolhidos[1]);
        this.setStringPersonalidade(this._mashupService.escolhidos[1], this._mashupService.escolhidos[2]);
        break;
    }
  }

  setStringPoder(op1: string, op2: string): void {
    this._mashupService.poder_1 = op1;
    this._mashupService.poder_2 = op2;
  }

  setStringFraqueza(op1: string, op2: string): void {
    this._mashupService.fraqueza_1 = op1;
    this._mashupService.fraqueza_2 = op2;
  }

  setStringPersonalidade(op1: string, op2: string): void {
    this._mashupService.personalidade_1 = op1;
    this._mashupService.personalidade_2 = op2;
  }

  generateUniqueRandom(maxNr: number, length: number): any {
    //Generate random number
    let random = (Math.random() * length).toFixed();

    //Coerce to number by boxing
    let random2 = Number(random);

    if (!this.haveIt.includes(random)) {
      this.haveIt.push(random);
      return random2;
    } else {
      if (this.haveIt.length < maxNr) {
        //Recursively generate number
        return this.generateUniqueRandom(maxNr, length);
      } else {
        console.log('No more numbers available.')
        return;
      }
    }
  }
}