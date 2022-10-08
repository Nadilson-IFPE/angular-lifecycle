import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  quantidade: number = 0;

  constructor() {}

  adicionar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade -= 1;
  }

  // Checked -> Conbtent -> View

  // Após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  // Quando o primeiro conteúdo é iniciado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  // Após alguma alteração, verifica a View
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  // Depois da inbicialização da View
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Goodbye, my friend!');
  }
}
