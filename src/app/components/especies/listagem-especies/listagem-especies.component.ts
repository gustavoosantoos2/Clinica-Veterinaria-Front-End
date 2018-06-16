import { Component, OnInit } from '@angular/core';
import { Especie } from '../../../model/especie.model';
import { EspeciesService } from '../../../services/especies/especies.service';

@Component({
  selector: 'app-listagem-especies',
  templateUrl: './listagem-especies.component.html',
  styleUrls: ['./listagem-especies.component.css']
})
export class ListagemEspeciesComponent implements OnInit {

  especies: Especie[] = [];

  constructor(
    private especieService: EspeciesService
  ) { }

  ngOnInit() {
    this.carregarEspecies();
  }

  carregarEspecies() {
    this.especieService.getEspecies().subscribe(
      success => {
        console.log(success);
        this.especies = success;
      }
    );
  }

  salvarEspecie(especie: Especie) {
    this.especieService.saveEspecie(especie).subscribe(
      success => this.carregarEspecies()
    );
  }

  deletarEspecie(id: number) {
    this.especieService.deleteEspecie(new Especie(id)).subscribe(
      success => this.carregarEspecies()
    );
  }
}
