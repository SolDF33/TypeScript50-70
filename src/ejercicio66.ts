class ComparadorMultiploPro {
    
    public analizarPares(n1: number, n2: number): void {
        console.log(`Analizando par: ${n1} y ${n2}`);

        // Validación para evitar división por cero
        if (n1 === 0 || n2 === 0) {
            console.log("Los números deben ser distintos de cero para esta comparación.");
            return;
        }

        if (n1 % n2 === 0) {
            console.log(`${n1} es múltiplo de ${n2}.`);
        } 
        else if (n2 % n1 === 0) {
            console.log(`${n2} es múltiplo de ${n1}.`);
        } 
        else {
            console.log("Ninguno de los dos es múltiplo del otro.");
        }
    }
}

// Pruebas de funcionamiento
const comparador = new ComparadorMultiploPro();

comparador.analizarPares(20, 5);  // Caso 1: 20 es múltiplo de 5
comparador.analizarPares(4, 12);  // Caso 2: 12 es múltiplo de 4
comparador.analizarPares(7, 3);   // Caso 3: Ninguno