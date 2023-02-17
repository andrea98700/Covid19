import { Component, OnInit } from '@angular/core';
import { DatiService } from './../../shared/dati.service';
import { Dati } from './../../model/dati';
import { Regioni } from './../../model/regioni';
import { Province } from './../../model/province';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dati: Dati[] = [];
  regione: Regioni[] = [];
  province: Province[] = [];

  constructor(private datiService: DatiService) { }

  getDati() {
    this.datiService.getDati()
      .subscribe(res =>  {
        this.dati = res;
      })
  }

  getDatiReg() {
    this.datiService.getDatiReg()
      .subscribe(res =>  {
        this.regione = res;
      })
  }

  getDatiProv() {
    this.datiService.getDatiProv()
      .subscribe(res =>  {
        this.province = res;
      })
  }

  ngOnInit(): void {
    this.getDati();
    this.getDatiReg();
    this.getDatiProv();
  }

}
