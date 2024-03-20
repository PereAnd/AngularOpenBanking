export interface Transaccion {
    idTransaccion: number;
    idCuenta: number;
    montoTransaccion: number;//cambiar el tipo de dato a double
    destinoPago: string;
    motivo: string;
    idEstado: number;
    idTransaccionAutorizador: string;
    numeroAprobacion: string;
    idTipo_Transaccion: number;
}