class TraductorNumerico {
    private numero: number;

    constructor(valor: number) {
        this.numero = valor;
    }

    public obtenerNombre(): void {
        let nombre: string;

        switch (this.numero) {
            case 1:
                nombre = "uno";
                break;
            case 2:
                nombre = "dos";
                break;
            case 3:
                nombre = "tres";
                break;
            case 4:
                nombre = "cuatro";
                break;
            case 5:
                nombre = "cinco";
                break;
            default:
                nombre = "Número fuera de rango (solo 1 al 5)";
                break;
        }

        console.log(`El número introducido es: ${nombre}`);
    }
}

// Pruebas
const miNumero = new TraductorNumerico(3);
miNumero.obtenerNombre(); // Salida: El número introducido es: tres

const errorNumero = new TraductorNumerico(10);
errorNumero.obtenerNombre(); // Salida: El número introducido es: Número fuera de rango