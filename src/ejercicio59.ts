class ClasificadorDeEntrada {
    private letra: string;

    constructor(entrada: string) {
        // Convertimos a minúsculas para reducir la cantidad de casos en el switch
        this.letra = entrada.charAt(0).toLowerCase();
    }

    public clasificar(): void {
        switch (this.letra) {
            // Caso: Vocales
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                console.log(`'${this.letra}' es una vocal.`);
                break;

            // Caso: Cifras numéricas
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
                console.log(`'${this.letra}' es una cifra numérica.`);
                break;

            // Caso por defecto: Consonantes
            default:
                // Verificamos que sea una letra realmente (A-Z) y no un símbolo
                if (this.letra >= "a" && this.letra <= "z") {
                    console.log(`'${this.letra}' es una consonante.`);
                } else {
                    console.log(`'${this.letra}' es un carácter especial o símbolo.`);
                }
                break;
        }
    }
}

// Pruebas
const test1 = new ClasificadorDeEntrada("E");
test1.clasificar(); // Salida: 'e' es una vocal.

const test2 = new ClasificadorDeEntrada("7");
test2.clasificar(); // Salida: '7' es una cifra numérica.

const test3 = new ClasificadorDeEntrada("B");
test3.clasificar(); // Salida: 'b' es una consonante.