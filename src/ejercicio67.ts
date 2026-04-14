class Contador {
    public contarHastaDiez(): void {
        let i: number = 1; // 1. Inicialización

        console.log("Iniciando cuenta...");

        // 2. Condición: mientras i sea menor o igual a 10
        while (i <= 10) {
            console.log(i);
            
            i++; // 3. Incremento (es lo mismo que i = i + 1)
        }

        console.log("¡Cuenta finalizada!");
    }
}

// Ejecución
const miContador = new Contador();
miContador.contarHastaDiez();