export interface Dati {
  data: string;
  stato: string;
  ricoverati_con_sintomi: number;
  terapia_intensiva: number;
  totale_ospedalizzati: number;
  isolamento_domiciliare: number;
  totale_positivi: number;
  variazione_totale_positivi: number;
  nuovi_positivi: number;
  dimessi_guariti: number;
  deceduti: number;
  casi_da_sospetto_diagnostico: number;
  casi_da_screening: number;
  totale_casi: number;
  tamponi: number;
  casi_testati: number;
  note: string;
  ingressi_terapia_intensiva: number;
  note_test: string;
  note_casi: string;
  totale_positivi_test_molecolare: number;
  totale_positivi_test_antigenico_rapido: number;
  tamponi_test_molecolare: number;
  tamponi_test_antigenico_rapido: number
}
