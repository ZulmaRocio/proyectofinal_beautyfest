export class Producto{

    id_producto: Number;
    name:String;
    stock:Number;  
    costo:Number;
    reservado:Number;
    imagen:String;


constructor(id_producto: Number, name:String, stock:Number, costo:Number, reservado:Number,imagen:String){

    this.id_producto = id_producto;
    this.name = name;
    this.stock = stock;  
    this.costo = costo;
    this.reservado = reservado;
    this.imagen = imagen 
}

}
