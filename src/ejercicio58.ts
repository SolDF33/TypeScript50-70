class AnalizadorDeCaracteres {
    private caracter: string;

    constructor(entrada: string) {
        // Nos aseguramos de tomar solo el primer carácter por si el usuario escribe de más
        this.caracter = entrada.charAt(0);
    }

    public analizar(): void {
        switch (this.caracter) {
            // Agrupamos los signos de puntuación
            case ".":
            case ",":
            case ";":
            case ":":
                console.log(`'${this.caracter}' es un signo de puntuación.`);
                break;

            // Agrupamos las cifras numéricas
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                console.log(`'${this.caracter}' es una cifra numérica.`);
                break;

            // Cualquier otro carácter
            default:
                console.log(`'${this.caracter}' es otro tipo de carácter.`);
                break;
        }
    }
}

// Pruebas
const prueba1 = new AnalizadorDeCaracteres(".");
prueba1.analizar(); // Salida: es un signo de puntuación.

const prueba2 = new AnalizadorDeCaracteres("5");
prueba2.analizar(); // Salida: es una cifra numérica.

const prueba3 = new AnalizadorDeCaracteres("A");
prueba3.analizar(); // Salida: es otro tipo de carácter.