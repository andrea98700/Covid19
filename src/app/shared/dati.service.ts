import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dati } from '../model/dati';
import { Regioni } from '../model/regioni';
import { Province } from '../model/province';

const API = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json';
const APIREG = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json';
const APIPROV = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  dati: Dati[] = [];

  constructor(private http: HttpClient) { }

  //Lettura dati nazionali
  getDati() : Observable<Dati[]> {
    return this.http.get<Dati[]>(API);
  }

  //Lettura dati regionali
  getDatiReg() : Observable<Regioni[]> {
    return this.http.get<Regioni[]>(APIREG);
  }

  //Lettura dati provinciali
  getDatiProv() : Observable<Province[]> {
    return this.http.get<Province[]>(APIPROV);
  }
}
