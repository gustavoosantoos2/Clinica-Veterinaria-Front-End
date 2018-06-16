import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnimaisService } from '../../../services/animais/animais.service';
import { EspeciesService } from '../../../services/especies/especies.service';
import { Animal } from 'src/app/model/animal.model';
import { Especie } from '../../../model/especie.model';

@Component({
  selector: 'app-formulario-animais',
  templateUrl: './formulario-animais.component.html',
  styleUrls: ['./formulario-animais.component.css']
})
export class FormularioAnimaisComponent implements OnInit {
  novoAnimal: Animal;
  especies: Especie[];

  animais: Animal[] = [];

  formAnimais: FormGroup;

  @Output()
  animalAdicionado: EventEmitter<Animal> = new EventEmitter<Animal>();

  constructor(
    private especiesService: EspeciesService
  ) { }

  ngOnInit() {
    this.novoAnimal = new Animal();
    this.novoAnimal.especie = new Especie();

    this.formAnimais = new FormGroup({
      nome: new FormControl('',
        [Validators.required, Validators.minLength(3)]),

      nascimento: new FormControl('',
        [Validators.required, Validators.pattern('\\d{2}\\/\\d{2}\\/\\d{4}')]),

      especie: new FormControl('',
        [Validators.required, Validators.nullValidator])
    });

    this.carregarEspecies();
  }

  carregarEspecies() {
    this.especiesService.getEspecies().subscribe(
      success => {
        this.especies = success;
      },
      error => {
        console.log(error);
      }
    );
  }

  adicionarAnimal() {
    this.novoAnimal = this.formAnimais.value;
    this.novoAnimal.especie = new Especie(this.formAnimais.controls['especie'].value);

    this.animalAdicionado.emit(this.novoAnimal);
  }
}
