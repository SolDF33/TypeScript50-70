class ContadorDescendente {
    public mostrarPares(): void {
        let i: number = 26; // Empezamos en 26

        console.log("Contando pares del 26 al 10...");

        // Mientras sea mayor o igual a 10
        while (i >= 10) {
            console.log(i);
            
            // Restamos 2 en cada vuelta para saltar de par en par
            i -= 2; 
        }

        console.log("Fin de la cuenta.");
    }
}

// Ejecución
const cuentaRegresiva = new ContadorDescendente();
cuentaRegresiva.mostrarPares();