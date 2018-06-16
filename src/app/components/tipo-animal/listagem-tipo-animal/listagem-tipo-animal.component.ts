import { Component, OnInit } from '@angular/core';
import { TipoAnimal } from '../../../model/tipo-animal.model';
import { TipoAnimalService } from '../../../services/tipo-animal/tipo-animal.service';

@Component({
  selector: 'app-listagem-tipo-animal',
  templateUrl: './listagem-tipo-animal.component.html',
  styleUrls: ['./listagem-tipo-animal.component.css']
})
export class ListagemTipoAnimalComponent implements OnInit {
  tipos: TipoAnimal[] = [];

  constructor(
    private tipoAnimalService: TipoAnimalService
  ) { }

  ngOnInit() {
    this.carregarTipos();
  }

  carregarTipos() {
    this.tipoAnimalService.getTiposAnimais().subscribe(
      success => {
        this.tipos = success;
      }
    );
  }

  salvarTipoAnimal(tipo: TipoAnimal) {
    this.tipoAnimalService.saveTipoAnimal(tipo).subscribe(
      success => this.carregarTipos()
    );
  }

  deletarTipo(id: string) {
    this.tipoAnimalService.deleteTipoAnimal(new TipoAnimal(id)).subscribe(
      success => this.carregarTipos()
    );
  }
}
