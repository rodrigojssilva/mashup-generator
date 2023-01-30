import { Component, ViewChild } from '@angular/core';
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

  constructor(
    public _mashupService: MashupService
  ) { }

}