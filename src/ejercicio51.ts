class ComparadorInvertido {
    private num1: number;
    private num2: number;

    constructor(n1: number, n2: number) {
        this.num1 = n1;
        this.num2 = n2;
    }

    public analizar(): void {
        // Variante con el número a la izquierda (Yoda style)
        // y variables a la derecha
        
        if (this.num1 === this.num2) {
            console.log("Los números son iguales");
        } else if (0 < (this.num1 - this.num2)) { 
            // Aquí un ejemplo de cómo forzar el número a la izquierda
            console.log(`El primer número (${this.num1}) es mayor`);
        } else {
            console.log(`El segundo número (${this.num2}) es mayor`);
        }
    }

    // Ejemplo específico para cumplir con "número a la izquierda"
    public esIgualA(valor: number): boolean {
        // Lado izquierdo: el número fijo | Lado derecho: la variable
        return valor === this.num1;
    }
}

const prueba = new ComparadorInvertido(10, 20);
prueba.analizar();