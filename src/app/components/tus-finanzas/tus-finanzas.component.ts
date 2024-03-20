import { BaseChartDirective } from 'ng2-charts';
import { Component, OnInit } from '@angular/core';


import { PagosService } from '../../servicios/pagos.service';
import { TransaccionService } from '../../servicios/transaccion.service';
import { TipoTransaccionService } from 'src/app/servicios/tipo-transaccion.service';
import { OtrosService } from '../../servicios/otros.service';
import { ComprasService } from '../../servicios/compras.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-tus-finanzas',
  templateUrl: './tus-finanzas.component.html',
  styleUrls: ['./tus-finanzas.component.css'],
  standalone: true,
  imports: [BaseChartDirective],
})


export class TusFinanzasComponent implements OnInit {

  //acceder al servicio finanzas
  constructor(public pagos: PagosService,
    public compras: ComprasService,
    private transfers: TransaccionService,
    public otros: OtrosService,
    private tipoTransfers: TipoTransaccionService) { }

  public chart: any;
  public montoTransacciones: number = 0;
  // 'Otros', 'Pagos', 'Transferencias', 'Compras'
  public montoCompras: number = 0;
  public montoCreditos: number = 0;
  public montoServiciosPub: number = 0;
  public montoPagos: number = 0;

  ngOnInit(): void {
    this.obtenerTransferencia();
    // this.crearPie();
  }

  obtenerTransferencia() {
    this.transfers.getTransaccion().subscribe({
      next: transacciones => {
        console.log("valor transacciones ", transacciones);
        transacciones.forEach((transaccion) => {
          this.montoTransacciones += transaccion["montoTransaccion"];
          let tipo = transaccion["idTipo_Transaccion"]
          if (tipo == 1) { this.montoCompras += transaccion["montoTransaccion"] }
          if (tipo == 2) { this.montoCreditos += transaccion["montoTransaccion"] }
          if (tipo == 3) { this.montoServiciosPub += transaccion["montoTransaccion"] }
          if (tipo == 4) { this.montoPagos += transaccion["montoTransaccion"] }
        });
        console.log("Valores", this.montoCompras, this.montoCreditos, this.montoServiciosPub, this.montoPagos);
        this.crearPie();
      },
      error: (err) => {
        console.log("Ocurrió un error")
      }
    });
  }


  crearTransaccion() {
    let body = {
      idTransaccion: 0,
      idCuenta: 0,
      montoTransaccion: 0,
      destinoPago: '',
      motivo: '',
      idEstado: 0,
      idTransaccionAutorizador: '',
      numeroAprobacion: '',
      idTipo_Transaccion: 0,
    }
    this.transfers.createTransaccion(body).subscribe({
      next: (response) => { console.log(response) }
    });
  }

  obtenerTipoTransacciones() {
    this.tipoTransfers.getTipoTransacciones().subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    });
  }

  obtenerTipoTransaccion() {
    let body = {
      idTipo_Transaccion: 1,
      nombreTipo: "Compras Marketplace"
    }
    this.tipoTransfers.getTipoTransaccion(body.idTipo_Transaccion).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    });
  }

  crearTipoTransaccion() {
    let body = {
      idTipo_Transaccion: 4,
      nombreTipo: "Compras Marketplace"
    }
    this.tipoTransfers.createTipoTransaccion(body).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    });
  }

  modificarTipoTransaccion() {
    let body = {
      idTipo_Transaccion: 4,
      nombreTipo: "Compras Marketplace 2"
    }
    this.tipoTransfers.updateTipoTransaccion(body).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    });
  }

  borrarTipoTransaccion() {
    let body = {
      idTipo_Transaccion: 4,
      nombreTipo: "Compras Marketplace 2"
    }
    this.tipoTransfers.deleteTipoTransaccion(body.idTipo_Transaccion).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    });
  }

  crearPie() {
    this.chart = new Chart('myChart', {
      type: 'doughnut',
      data: {
        labels: ['Compras', 'Créditos', 'Servicios públicos', 'Pagos'],
        datasets: [{
          label: 'Tus Gastos',
          data: [
            this.montoCompras,
            this.montoCreditos,
            this.montoServiciosPub,
            this.montoPagos
          ],
          backgroundColor: [
            'rgb(115,220,248)',
            'rgb(70, 188, 219)',
            'rgb(42, 117, 165)',
            'rgb(6, 67, 106)',
          ],
          hoverOffset: 4,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}