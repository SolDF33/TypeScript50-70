class AnalizadorNumerico {
    private numero: number;

    constructor(n: number) {
        // Aseguramos que sea positivo como pide la consigna
        this.numero = Math.abs(Math.floor(n));
    }

    public contarCifras(): void {
        let copiaNumero = this.numero;
        let contadorCifras = 0;

        // Caso especial: si el número es 0, tiene 1 cifra
        if (copiaNumero === 0) {
            contadorCifras = 1;
        } else {
            // Mientras el número tenga algo que dividir
            while (copiaNumero > 0) {
                // Dividimos por 10 y redondeamos hacia abajo para "quitar" el dígito
                copiaNumero = Math.floor(copiaNumero / 10);
                contadorCifras++;
            }
        }

        console.log(`El número ${this.numero} tiene ${contadorCifras} cifras.`);
    }
}

// Pruebas
const prueba1 = new AnalizadorNumerico(456);
prueba1.contarCifras(); // Salida: 3 cifras

const prueba2 = new AnalizadorNumerico(12345);
prueba2.contarCifras(); // Salida: 5 cifras