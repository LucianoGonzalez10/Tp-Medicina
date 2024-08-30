class Medicamento{
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    mostrarDetalles(){
        console.log(`Datos: Nombre: ${this.nombre}, Id: ${this.id}, Precio: ${this.precio}, Stock: ${this.stock}`);
    }
}

class Inventario{
    constructor(){
        this.a = [];
    }

    agregarMedicamento(medicamento){
        if(medicamento instanceof Medicamento){
            if(this.a.includes(medicamento)){
                console.log("El medicamento ya se encuentra en el array");
            }
            else{
                this.a.push(medicamento);
            }
        }
        else{
            console.log("El elemento ingresado NO es un medicamento.");
        }
    }

    buscarMedicamento(id){
        let encontrado = "No encontrado";
        this.a.forEach(element => {
            if(element instanceof Medicamento){
                if(element.id == id){
                    encontrado = element;
                }
            }
        });
        return encontrado;
    }

    mostrarInventario(){
        console.log("Medicamentos: ")
        this.a.forEach(element => {
            if(element instanceof Medicamento){
                element.mostrarDetalles();
            }
        });
    }

    actualizarStock(id, cantidad){
        let mod = this.buscarMedicamento(id);
        if(mod instanceof Medicamento){
            mod.stock = cantidad;
            console.log("Stock Actualizado");
        }
        else{
            console.error(mod);
        }
    }
}

let inv = new Inventario();
let med1 = new Medicamento("2", "Ibuprofeno", 299, 3);
inv.agregarMedicamento(med1);
inv.mostrarInventario();
inv.actualizarStock(1, 7);
inv.mostrarInventario();

class Venta{
    constructor(medicamento, cantidad){
        this.medicamento = medicamento;
        this.cantidad = cantidad;
        this.total = this.medicamento.precio * cantidad;
    }

    registrarVenta(){
        if(this.medicamento instanceof Medicamento){
            this.medicamento.stock = this.medicamento.stock - this.cantidad;
        }
    }
}

let venta = new Venta(med1, 2);
venta.registrarVenta();
inv.mostrarInventario();


