class JuegoAdivinanza {
    private readonly NUMERO_SECRETO: number = 7;
    private readonly MAX_INTENTOS: number = 3;

    public jugar(): void {
        let intentosRealizados: number = 0;
        let acertó: boolean = false;
        let numeroUsuario: number;

        console.log("--- Juego de Adivinanza ---");
        console.log(`Tienes ${this.MAX_INTENTOS} intentos para adivinar un número del 1 al 10.`);

        // El bucle sigue mientras no haya acertado Y todavía tenga intentos
        while (intentosRealizados < this.MAX_INTENTOS && !acertó) {
            intentosRealizados++;
            
            /* En un entorno real:
               numeroUsuario = parseInt(prompt(`Intento ${intentosRealizados}: `));
            */
            
            // Simulación de un intento del usuario
            numeroUsuario = 5; 
            console.log(`Intento ${intentosRealizados}: El usuario ingresa ${numeroUsuario}`);

            if (numeroUsuario === this.NUMERO_SECRETO) {
                acertó = true;
            } else {
                console.log("No es ese número...");
            }

            // Forzamos salida para la simulación de consola si no queremos bucle infinito
            if (intentosRealizados === 1) numeroUsuario = 7; // Simulamos que acierta al segundo intento
        }

        // Mensaje final según el resultado
        if (acertó) {
            console.log(`¡Felicidades! Adivinaste el número en el intento ${intentosRealizados}.`);
        } else {
            console.log(`Game Over. El número era el ${this.NUMERO_SECRETO}.`);
        }
    }
}

// Ejecución
const partida = new JuegoAdivinanza();
partida.jugar();