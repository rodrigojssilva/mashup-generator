import { Component, ViewChild } from '@angular/core';
import { listaDePersonagens } from 'src/services/lista-de-personagens.service';
import { MashupService } from 'src/services/mashup.service';
import { DiceD20Component } from 'src/shared/dice-d20/dice-d20.component';
import { DiceD6Component } from 'src/shared/dice-d6/dice-d6.component';
// import * as data from '../assets/mashup/personagens.json';
// const listaDePersonagens = data;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('dice_d6') dice_d6: DiceD6Component;
  @ViewChild('dice_d10') dice_d10: DiceD20Component;
  @ViewChild('dice_d20') dice_d20: DiceD20Component;

  title = 'mashup-generator';

  haveIt: any[] = [];

  constructor(
    public _mashupService: MashupService
  ) { }

  // rolld10(): void {
  //   this._mashupService.escolhidos = [];
  //   this._mashupService.showConstrucao = false;
  //   this.dice_d20.resetD20();
  //   this._mashupService.grupo = 0;
  //   this._mashupService.grupo = this.generateUniqueRandom(1, 10);
  //   this._mashupService.grupoEscolhido = listaDePersonagens.filter(x => x.grupo == this._mashupService.grupo);
  // }

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