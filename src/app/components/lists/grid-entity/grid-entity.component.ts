import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-entity',
  template: `<app-search [filterEntity]="filterEntityGrid" />`,
  templateUrl: './grid-entity.component.html',
  styleUrls: ['./grid-entity.component.css']
})
export class GridEntityComponent{
  constructor(){}
  @Input() filterEntityGrid: string="";
  entities = [
    {
      "id": 1,
      "name": "av villas",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-avvillas.png",
      "path": "ban-avvillas"
    },
    {
      "id": 2,
      "name": "banco popular",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-popular.png",
      "path": "ban-popular"

    },
    {
      "id": 3,
      "name": "banco w",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-w.png",
      "path": "ban-w"

    },
    {
      "id": 4,
      "name": "daviplata",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/daviplata.png",
      "path": "daviplata"
    },
    {
      "id": 6,
      "name": "banco de occidente",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-occidente.png",
      "path": "ban-occidente"
    },
    {
      "id": 7,
      "name": "banco pichincha",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-pichincha.png",
      "path": "ban-pichincha"

    },
    {
      "id": 8,
      "name": "banco agrario de colombia",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-agrario.png",
      "path": "ban-agrario"
    },
    {
      "id": 9,
      "name": "banco caja social",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-cajasocial.png",
      "path": "ban-cajasocial"
    },
    {
      "id": 10,
      "name": "bancolombia",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/bancolombia.png",
      "path": "bancolombia"
    },
    {
      "id": 11,
      "name": "scotiabank colpatria",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/scotiabank.png",
      "path": "scotiabank"
    },
    {
      "id": 12,
      "name": "nequi",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/nequi.png",
      "path": "nequi"
    },
    {
      "id": 13,
      "name": "nu",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/nu.png",
      "path": "nu"
    },
    {
      "id": 14,
      "name": "pibank",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/pibank.png",
      "path": "pibank"
    },
    {
      "id": 15,
      "name": "banco finandina",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-finandina.png",
      "path": "ban-finandina"
    },
    {
      "id": 16,
      "name": "banco sudameris",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-gnb.png",
      "path": "ban-gnb"
    },
    {
      "id": 17,
      "name": "bancoomeva",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/bancoomeva.png",
      "path": "bancoomeva"
    },
    {
      "id": 18,
      "name": "banco falabella",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-falabella.png",
      "path": "ban-falabella"
    },
    {
      "id": 19,
      "name": "banco de bogotá",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-bogota.png",
      "path": "ban-bogota"
    },
    {
      "id": 20,
      "name": "banco davivienda",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-davivienda.png",
      "path": "ban-davivienda"
    },
    {
      "id": 20,
      "name": "bancocamia",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/bancamia.png",
      "path": "bancamia"
    },
  ];

}
