class Cosmetico {
    constructor(producto, coleccion, precio) {
        this.producto = producto;
        this.coleccion = coleccion;
        this.precio = precio;
    }

    categoria(){
        console.log(`${this.producto} de ${this.coleccion} es origen vegano`);
    }

    envio(costoAdic){
        console.log(this.precio += costoAdic);
    }
}