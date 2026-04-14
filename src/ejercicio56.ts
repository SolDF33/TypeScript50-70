class CalculadoraMinimo {
    private a: number;
    private b: number;

    constructor(n1: number, n2: number) {
        this.a = n1;
        this.b = n2;
    }

    public obtenerMenor(): number {
        // Estructura: (condición) ? valor_si_cierto : valor_si_falso
        return (this.a < this.b) ? this.a : this.b;
    }

    public imprimirResultado(): void {
        console.log(`Entre ${this.a} y ${this.b}, el menor es: ${this.obtenerMenor()}`);
    }
}

// Pruebas
const prueba1 = new CalculadoraMinimo(10, 5);
prueba1.imprimirResultado(); // Salida: 5

const prueba2 = new CalculadoraMinimo(-3, 8);
prueba2.imprimirResultado(); // Salida: -3