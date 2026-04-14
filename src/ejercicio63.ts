class ValidadorAcceso {
    private readonly CLAVE_CORRECTA: number = 1111;

    public iniciarSesion(): void {
        // En una aplicación real, aquí usaríamos una librería para leer la terminal
        // Por ahora, simularemos los intentos del usuario en un bucle
        
        let intento: number = 0; // Inicializamos con un valor diferente a 1111

        console.log("Sistema de Seguridad Iniciado.");

        // BUCLE WHILE: Se repite MIENTRAS el intento NO SEA 1111
        while (intento !== this.CLAVE_CORRECTA) {
            
            /* En un entorno de consola real usarías: 
               intento = parseInt(prompt("Introduce tu clave: "));
            */

            // Simulamos que el usuario ingresa un número (para la prueba)
            // Aquí pondremos un ejemplo de cómo cambiaría la variable:
            console.log("Clave incorrecta. Pidiendo contraseña de nuevo...");
            
            // Forzamos el éxito para que no sea un bucle infinito en tu consola:
            intento = 1111; 
        }

        console.log("¡Acceso concedido! Bienvenido al sistema.");
    }
}

// Ejecución
const login = new ValidadorAcceso();
login.iniciarSesion();