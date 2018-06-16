import { AnimaisService } from './../../../services/animais/animais.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../../../model/animal.model';

@Component({
  selector: 'app-listagem-animais',
  templateUrl: './listagem-animais.component.html',
  styleUrls: ['./listagem-animais.component.css']
})
export class ListagemAnimaisComponent implements OnInit {

  animais: Animal[] = [];

  constructor(
    private animaisService: AnimaisService
  ) { }

  ngOnInit() {
    this.carregarAnimais();
  }


  carregarAnimais() {
    this.animaisService.getAnimais().subscribe(
      success => {
        this.animais = success;
      }
    );
  }

  salvarAnimal(animal: Animal) {
    this.animaisService.saveAnimal(animal).subscribe(
      success => {
        this.carregarAnimais();
      },
      err => {
        console.log(err);
      }
    );
  }

  deletarAnimal(id: number) {
    this.animaisService.deleteAnimal(new Animal(id)).subscribe(
      success => {
        this.carregarAnimais();
      }
    );
  }
}
