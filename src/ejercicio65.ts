class ValidadorMultiplos {
    
    public ejecutar(): void {
        let continuar: boolean = true;

        console.log("--- Comprobador de Múltiplos ---");

        while (continuar) {
            // Simulamos la entrada de un par de números (ejemplo: 10 y 5)
            let num1: number = 10;
            let num2: number = 5;

            // Verificamos si el segundo no es cero para evitar errores matemáticos
            if (num2 !== 0) {
                if (num1 % num2 === 0) {
                    console.log(`${num1} ES múltiplo de ${num2}.`);
                } else {
                    console.log(`${num1} NO es múltiplo de ${num2}.`);
                }
            } else {
                console.log("No se puede dividir por cero.");
            }

            // Para que no sea un bucle infinito en tu consola de VS Code:
            console.log("Finalizando ciclo de prueba...");
            continuar = false; 
        }
    }
}

// Ejecución
const validador = new ValidadorMultiplos();
validador.ejecutar();