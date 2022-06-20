export class Factura{

    id_cliente:  Number;
    nombre_cliente:  String;
    fecha:  Date;  
    valor_total:  Number;
    estado:  Boolean;
        
 
constructor(id_cliente:Number, nombre_cliente:  String, fecha:  Date, valor_total:  Number, estado:  Boolean){

    this.id_cliente = id_cliente;
    this.nombre_cliente = nombre_cliente;
    this.fecha = fecha;  
    this.valor_total = valor_total;
    this.estado = estado;
}
}
