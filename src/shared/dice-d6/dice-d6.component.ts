import { Component, OnInit } from '@angular/core';
import { MashupService } from 'src/services/mashup.service';
declare var $: any;

@Component({
    selector: 'dice-d6',
    templateUrl: './dice-d6.component.html',
    styleUrls: ['./dice-d6.component.css'],
})
export class DiceD6Component implements OnInit {

    $die: any;
    min: number = 1;
    max: number = 24;

    constructor(
        public _mashupService: MashupService
    ) { }


    ngOnInit(): void {
        this.$die = document.getElementById('cube');
    }

    rollDiceD6(): void {
        if (this._mashupService.personagem.trim() == '') {
            alert("Escolha um personagem!");
            return;
        }

        if (this._mashupService.escolhidos.length < 3) {
            alert("Role 3d20!");
            return;
        }

        let xRand = this.getRandom();
        let yRand = this.getRandom();

        this._mashupService.showConstrucao = true;

        this.$die.style.webkitTransform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
        this.$die.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';

        let ranNum = this.getRandomNumber();
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

    getRandomNumber() {
        let min = Math.ceil(1);
        let max = Math.floor(6);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    getRandom() {
        return (Math.floor(Math.random() * (this.max - this.min)) + this.min) * 90;
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
}