class ClasificadorAlternativo {
    private caracter: string;

    constructor(entrada: string) {
        this.caracter = entrada.charAt(0).toLowerCase();
    }

    public clasificar(): void {
        // Usamos IF para las vocales (comparando con OR)
        if (this.caracter === "a" || this.caracter === "e" || this.caracter === "i" || this.caracter === "o" || this.caracter === "u") {
            console.log(`'${this.caracter}' es una vocal.`);
        } 
        // ELSE IF para los números (usando un rango)
        else if (this.caracter >= "0" && this.caracter <= "9") {
            console.log(`'${this.caracter}' es una cifra numérica.`);
        } 
        // ELSE IF para las consonantes (rango de letras)
        else if (this.caracter >= "a" && this.caracter <= "z") {
            console.log(`'${this.caracter}' es una consonante.`);
        } 
        // ELSE para todo lo demás
        else {
            console.log(`'${this.caracter}' es un símbolo o carácter especial.`);
        }
    }
}

// Pruebas
const ej60 = new ClasificadorAlternativo("G");
ej60.clasificar(); // Salida: 'g' es una consonante.