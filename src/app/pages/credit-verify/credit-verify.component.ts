import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PreApprovedComponent } from 'src/app/components/modals/pre-approved/pre-approved.component';
import { IndicatorComponent } from 'src/app/components/utils/indicator/indicator.component';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProductosFService } from 'src/app/services/productos-f.service';
import { RequestBanksService } from 'src/app/services/request-banks.service';
import { EntidadFinancieraService } from 'src/app/services/entidad-financiera.service';
import { environment } from 'src/environments/environment.development';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { DetallesSolicitudP } from 'src/app/models/detallesSolicitudP';
import { ProductoF } from 'src/app/models/producto-f';

/*interface CreditRequestResponse {
  message: string;
}*/

@Component({
  selector: 'app-credit-verify',
  templateUrl: './credit-verify.component.html',
  styleUrls: ['./credit-verify.component.css']
})
export class CreditVerifyComponent {
  datosCredito: any = {};
  resultDataCredito: any = {};
  processBancolombia: any = {};
  evaluateCredit: any = {};
  creditSelected: any={};
  cliente!: Cliente;
  savedProduct?: ProductoF;
  showSuccesMessage = false;
  routes = {
    back: '/credit/request',
    help: '/help',
    approved: 'credit/approved',
    preapproved: 'credit/preapproved',
    noapproved: 'credit/reject'
  };
 // @ViewChild(IndicatorComponent) indicatorComponent!: IndicatorComponent;

  constructor(
    private router: Router,
    private clienteServices: ClientesService,
    private productoServices: ProductosFService,
    private bankServices: RequestBanksService,
    private _matDialog: MatDialog,
    private http: HttpClient,
    private entidadFService: EntidadFinancieraService,
  ){}

 /* openModal(): void {
    this._matDialog.open(PreApprovedComponent, {
      width: '302px',
      height: '295px',
    })
  }*/

  ngOnInit(): void {
    this.datosCredito = JSON.parse(localStorage.getItem("selectedEntity")!);
    this.cliente = JSON.parse(localStorage.getItem("user")!);
    console.log("datos cliente: ", this.cliente);
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
    //this.indicatorComponent.avanzar();
  }

  evaluateAppliCredit(): void {
    // Obtener nombre de la entidad financiera
    let nombreEntidadF = this.datosCredito.entidadF.nombre;
    let numIdentificacion = this.cliente.numeroIdentificacion;
    let cuotaMensualCredt = this.datosCredito.entidadF.cuotaMensual;
    let dataEntidadF: any = {};

    console.log("nombre banco ", nombreEntidadF);

    if (nombreEntidadF == "Bancolombia") {
      this.bankServices.ban_evaluateCredit(cuotaMensualCredt, numIdentificacion).subscribe({
        next: (respuesta) => {
          this.evaluateCredit = respuesta;
          console.log("respuesta services evaluateCredit ", this.evaluateCredit.codResponse);

          if (this.evaluateCredit.codResponse == "R-01") {
            this.entidadFService.getEntityByName(nombreEntidadF).subscribe({
              next: (value) => {
                dataEntidadF = value;

                // Verifica si dataEntidadF tiene el valor esperado
                if (dataEntidadF && dataEntidadF.idEntidadFinanciera) {
                  console.log("Resultado dataEntidadF: ", dataEntidadF);

                  let productF: ProductoF = {
                    idEntidadFinanciera: dataEntidadF.idEntidadFinanciera,
                    idBilletera_CBITBank: this.datosCredito.user.idBilleteraCBITBank!,
                    idEstado: 1,
                    idSubtipo_Producto: this.datosCredito.subtipoProductoC.idSubtipo_Producto!,
                    tasaInteres: this.datosCredito.entidadF.tasaEA,
                    plazo: this.datosCredito.entidadF.plazo,
                    montoCredito: this.datosCredito.entidadF.monto,
                    cuotaMensual: this.datosCredito.entidadF.cuotaMensual,
                    seguroVida: this.datosCredito.entidadF.seguroVida,
                    tasaEfectivaAnual: this.datosCredito.entidadF.tasaEA,
                    tasaMensualVencida: this.datosCredito.entidadF.tasaMV,
                    vtua: this.datosCredito.entidadF.vtua,
                  };
                  console.log("datos producto a guardar ", productF);
                  this.productoServices.createProductoCredit(productF).subscribe({
                    next: (result) => {
                      this.savedProduct = result;
                      localStorage.setItem('productoCreado', JSON.stringify(this.savedProduct));
                      this.showSuccesMessage = true;
                    },
                    error: (error) => {
                      console.error(error);
                    },
                  })
                } else {
                  console.log("dataEntidadF no tiene los datos esperados");
                }

                this.directPage(this.evaluateCredit.codResponse);
              },
              error: (err) => {
                console.log("Error en el servicio getEntityByName: ", err);
              },
            });
          } else {
            this.directPage(this.evaluateCredit.codResponse);
          }
        },
        error: (e) => {
          console.log("Error al llamar el servicio de evaluar crédito: ", e);
        },
      });
    }

    if (nombreEntidadF == "Daviplata") {
      this.bankServices.dav_evaluateCredit(cuotaMensualCredt, numIdentificacion).subscribe({
        next: (respuesta) => {
          this.evaluateCredit = respuesta;
          console.log("respuesta services evaluateCredit ", this.evaluateCredit.codResponse);
          this.directPage(this.evaluateCredit.codResponse);
        },
        error: (e) => {
          console.log("Error al llamar el servicio de evaluar crédito: ", e);
        },
      });
    }
  }


  directPage(codigoRespuesta: string): void {
    switch (codigoRespuesta) {
      case "R-01":
        this.goToPage(this.routes.approved);
        break;
      case "R-02":
        this.goToPage(this.routes.preapproved);
        break;
      case "R-03":
        this.goToPage(this.routes.noapproved);
        break;
      default:
        console.log("Código de respuesta no reconocido: ", codigoRespuesta);
        break;
    }
  }
}
