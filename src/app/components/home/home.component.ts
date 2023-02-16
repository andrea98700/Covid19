import { Component, OnInit } from '@angular/core';
import { DatiService } from './../../shared/dati.service';
import { Dati } from './../../model/dati';
import { Regioni } from './../../model/regioni';
import { Province } from './../../model/province';

@Component({
  selector: 'app-home',
  template: `
    <pre>{{ dati | json }}</pre>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  dati: Dati[] = [];
  regione: Regioni[] = [];
  provine: Province[] = [];

  constructor(private datiService: DatiService) { }

  getDati() {
    this.datiService.getDati()
      .subscribe(res =>  {
        this.dati = res;
        console.log(this.dati);
      })
  }

  ngOnInit(): void {
    this.getDati();
  }

}
