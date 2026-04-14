class Matematico {
    private numero: number;

    constructor(valor: number) {
        this.numero = valor;
    }

    public mostrarValorAbsoluto(): void {
        // Usamos el operador condicional (ternario)
        const valorAbsoluto = this.numero >= 0 ? this.numero : -this.numero;

        console.log(`El valor original es: ${this.numero}`);
        console.log(`El valor absoluto es: ${valorAbsoluto}`);
    }
}

// Pruebas
const numPositivo = new Matematico(15);
numPositivo.mostrarValorAbsoluto();

const numNegativo = new Matematico(-8);
numNegativo.mostrarValorAbsoluto();