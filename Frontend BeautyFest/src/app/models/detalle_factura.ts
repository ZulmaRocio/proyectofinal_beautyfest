export class DetalleFactura{

    id_producto:Number;
    cantidad: Number;
    id_cliente: Number;
    vlor_item: Number;
        
 
constructor(id_producto:Number,  cantidad:  Number, id_cliente:  Number,  vlor_item:  Number){

    this.id_producto = id_producto;
    this.cantidad = cantidad;
    this.id_cliente = id_cliente;  
    this.vlor_item = vlor_item;
}
}