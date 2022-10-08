import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges {
  //nome: string = 'Nadilson';
  @Input() nome: string = '';

  constructor() {
    console.log(`Construtor ${this.nome}`);
  }

  ngOnChanges(): void {
    console.log(`OnChanges ${this.nome}`);
  }

  ngOnInit(): void {
    //   this.nome = `Olá, ${this.nome}.`;
    //   console.log('Olá! Eu sou o nascimento do Title Component.');
    this.nome = this.nome + 'x';
    console.log(`OnInit ${this.nome}`);
  }
}
