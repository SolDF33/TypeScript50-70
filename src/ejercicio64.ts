class CalculadoraInteractiva {
    
    public iniciar(): void {
        let numero: number = -1; // Inicializamos con un valor que no sea 0

        console.log("--- Calculador de Cuadrados ---");
        console.log("(Introduce 0 para salir)");

        // El bucle se repite mientras el número NO sea cero
        while (numero !== 0) {
            /* En un entorno real de Node.js usarías:
               numero = parseInt(readline.question("Introduce un número: "));
            */

            // Simulación para la lógica del ejercicio:
            // Supongamos que el usuario ingresa un 5
            numero = 5; 

            if (numero !== 0) {
                const cuadrado = numero * numero;
                console.log(`El cuadrado de ${numero} es: ${cuadrado}`);
                
                // Forzamos el cierre para la prueba de consola
                numero = 0; 
                console.log("Has introducido 0. Saliendo del programa...");
            }
        }
    }
}

// Ejecución
const calculadora = new CalculadoraInteractiva();
calculadora.iniciar();