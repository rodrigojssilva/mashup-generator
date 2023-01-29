import { Component, OnInit } from '@angular/core';
import { MashupService } from 'src/services/mashup.service';
declare var $: any;

@Component({
    selector: 'dice-d10',
    templateUrl: './dice-d10.component.html',
    styleUrls: ['./dice-d10.component.scss'],
})
export class DiceD10Component implements OnInit {

    $die: any;
    sides: number = 10;
    initialSide: number = 0;
    lastFace: number = 0;
    timeoutId: any = 0;
    transitionDuration = 250;
    animationDuration = 100;

    constructor(
        public _mashupService: MashupService
    ) { }

    ngOnInit(): void {
        this.$die = $('.die');
    }

    resetD10(): void {
        this.rollTo(1);
    }

    rollDiceD10(): void {
        clearTimeout(this.timeoutId);

        this.timeoutId = setTimeout(() => {
            let ranNum = this.randomFace();
            this._mashupService.grupo = ranNum;
            this._mashupService.escolhidos = [];            
            this._mashupService.grupoEscolhido = this._mashupService.listaDePersonagens.filter(x => x.grupo == this._mashupService.grupo);
            this.rollTo(ranNum);
        }, this.animationDuration);
    }

    randomFace() {
        var face = Math.floor((Math.random() * this.sides)) + this.initialSide
        this.lastFace = face == this.lastFace ? this.randomFace() : face
        return face;
    }

    rollTo(face: number): void {
        clearTimeout(this.timeoutId);
        this.$die.attr('data-face', face)
    }
}