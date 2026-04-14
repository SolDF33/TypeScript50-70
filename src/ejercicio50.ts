class Comparador {
    // Usamos el modificador private para encapsular los datos
    private num1: number;
    private num2: number;

    constructor(n1: number, n2: number) {
        this.num1 = Math.floor(n1); // Aseguramos que sea entero
        this.num2 = Math.floor(n2);
    }

    public comparar(): string {
        if (this.num1 === this.num2) {
            return "Los números son iguales.";
        } else if (this.num1 > this.num2) {
            return `El primer número (${this.num1}) es mayor que el segundo (${this.num2}).`;
        } else {
            return `El segundo número (${this.num2}) es mayor que el primero (${this.num1}).`;
        }
    }
}

// Ejemplo de uso:
const miComparacion = new Comparador(15, 25);
console.log(miComparacion.comparar());