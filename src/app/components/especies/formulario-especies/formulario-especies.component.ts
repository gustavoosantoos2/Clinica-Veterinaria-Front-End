import { TipoAnimalService } from './../../../services/tipo-animal/tipo-animal.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Especie } from 'src/app/model/especie.model';
import { TipoAnimal } from '../../../model/tipo-animal.model';

@Component({
  selector: 'app-formulario-especies',
  templateUrl: './formulario-especies.component.html',
  styleUrls: ['./formulario-especies.component.css']
})
export class FormularioEspeciesComponent implements OnInit {
  novaEspecie: Especie;
  tiposAnimais: TipoAnimal[] = [];

  formEspecies: FormGroup;

  @Output()
  especieAdicionada: EventEmitter<Especie> = new EventEmitter<Especie>();

  constructor(
    private tipoAnimalService: TipoAnimalService
  ) { }

  ngOnInit() {
    this.novaEspecie = new Especie();
    this.novaEspecie.tipoAnimal = new TipoAnimal();

    this.formEspecies = new FormGroup({
      nome: new FormControl('',
        [Validators.required, Validators.minLength(3)]),

      descricao: new FormControl('',
        [Validators.required]),

      tipo: new FormControl('',
        [Validators.required])
    });

    this.carregarEspecies();
  }

  carregarEspecies() {
    this.tipoAnimalService.getTiposAnimais().subscribe(
      success => {
        this.tiposAnimais = success;
      },
      error => {
        console.log(error);
      }
    );
  }

  adicionarEspecie() {
    this.novaEspecie = this.formEspecies.value;
    this.novaEspecie.tipoAnimal = new TipoAnimal(this.formEspecies.controls['tipo'].value);

    this.especieAdicionada.emit(this.novaEspecie);
  }
}
