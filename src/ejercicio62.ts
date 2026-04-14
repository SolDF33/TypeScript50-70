class TraductorAlternativo {
    private numero: number;

    constructor(valor: number) {
        this.numero = valor;
    }

    public imprimirNombre(): void {
        let resultado: string;

        if (this.numero === 1) {
            resultado = "uno";
        } else if (this.numero === 2) {
            resultado = "dos";
        } else if (this.numero === 3) {
            resultado = "tres";
        } else if (this.numero === 4) {
            resultado = "cuatro";
        } else if (this.numero === 5) {
            resultado = "cinco";
        } else {
            resultado = "Número fuera de rango";
        }

        console.log(`El resultado con IF es: ${resultado}`);
    }
}

// Pruebas
const ej62 = new TraductorAlternativo(4);
ej62.imprimirNombre(); // Salida: cuatro
