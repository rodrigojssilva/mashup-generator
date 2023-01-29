import { Component, OnInit } from '@angular/core';
import { MashupService } from 'src/services/mashup.service';
declare var $: any;

@Component({
    selector: 'dice-d20',
    templateUrl: './dice-d20.component.html',
    styleUrls: ['./dice-d20.component.scss'],
})
export class DiceD20Component implements OnInit {

    $die: any;
    sides: number = 20;
    initialSide: number = 1;
    lastFace: number = 1;
    timeoutId: any = 0;
    transitionDuration = 250;
    animationDuration = 100;

    constructor(
        public _mashupService: MashupService
    ) { }

    ngOnInit(): void {
        this.$die = $('.die');
    }

    resetD20(): void {
        this.rollTo(1);
    }

    rollDiceD20(): void {
        if (this._mashupService.grupo == 0) {
            alert("Role o d10!");
            return;
        }

        clearTimeout(this.timeoutId);

        this.timeoutId = setTimeout(() => {
            if (this._mashupService.escolhidos.length == 3) {
                this._mashupService.escolhidos = [];
                this.resetD20();
            }

            let ranNum = 0;
            let personagemEscolhido = "";
            do {
                ranNum = this.randomFace();
                console.log(ranNum);
                personagemEscolhido = this._mashupService.grupoEscolhido[ranNum - 1].opcao;
            } while (this._mashupService.escolhidos.findIndex(x => x == personagemEscolhido) > -1);
            this.rollTo(ranNum);

            this._mashupService.escolhidos.push(personagemEscolhido);

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