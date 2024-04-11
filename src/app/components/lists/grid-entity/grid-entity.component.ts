import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-entity',
  templateUrl: './grid-entity.component.html',
  styleUrls: ['./grid-entity.component.css']
})
export class GridEntityComponent implements OnInit{
  constructor(){}

  entities = [
    {
      "id": 1,
      "name": "av villas",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-avvillas.png",
      "path": "../../assets/entityF/ban-avvillas.png"
    },
    {
      "id": 2,
      "name": "banco popular",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-popular.png",
      "path": "../../assets/entityF/ban-popular.png"

    },
    {
      "id": 3,
      "name": "banco w",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-w.png",
      "path": "../../assets/entityF/ban-w.png"

    },
    {
      "id": 4,
      "name": "banco w",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-w.png",
      "path": "../../assets/entityF/ban-w.png"

    },
    {
      "id": 5,
      "name": "daviplata",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/daviplata.png",
      "path": "../../assets/entityF/daviplata.png"
    },
    {
      "id": 6,
      "name": "banco de occidente",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-occidente.png",
      "path": "../../assets/entityF/ban-occidente.png"
    },
    {
      "id": 7,
      "name": "banco pichincha",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-pichincha.png",
      "path": "../../assets/entityF/ban-pichincha.png"

    },
    {
      "id": 8,
      "name": "banco de agrario de colombia",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-agrario.png",
      "path": "../../assets/entityF/ban-agrario.png"
    },
    {
      "id": 9,
      "name": "banco caja social",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-cajasocial.png",
      "path": "../../assets/entityF/ban-cajasocial.png"
    },
    {
      "id": 10,
      "name": "bancolombia",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/bancolombia.png",
      "path": "../../assets/entityF/bancolombia.png"
    },
    {
      "id": 11,
      "name": "scotiabank colpatria",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/scotiabank.png",
      "path": "../../assets/entityF/scotiabank.png"
    },
    {
      "id": 12,
      "name": "nequi",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/nequi.png",
      "path": "../../assets/entityF/nequi.png"
    },
    {
      "id": 13,
      "name": "nu",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/nu.png",
      "path": "../../assets/entityF/nu.png"
    },
    {
      "id": 14,
      "name": "pibank",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/pibank.png",
      "path": "../../assets/entityF/pibank.png"
    },
    {
      "id": 15,
      "name": "banco finandina",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-finandina.png",
      "path": "../../assets/entityF/ban-finandina.png"
    },
    {
      "id": 16,
      "name": "banco sudameris",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-gnb.png",
      "path": "../../assets/entityF/ban-gnb.png"
    },
    {
      "id": 17,
      "name": "banco sudameris",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-gnb.png",
      "path": "../../assets/entityF/ban-gnb.png"
    },
    {
      "id": 18,
      "name": "bancoomeva",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/bancoomeva.png",
      "path": "../../assets/entityF/bancoomeva.png"
    },
    {
      "id": 19,
      "name": "banco falabella",
      "url": "https://periferiaitgroup-my.sharepoint.com/personal/cesarbaez_cbit-online_com/Documents/OpenBanking/Demo/Imagenes/logos%20Bancos/ban-falabella.png",
      "path": "../../assets/entityF/ban-falabella.png"
    },
  ];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
