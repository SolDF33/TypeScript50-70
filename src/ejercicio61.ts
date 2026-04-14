class AnalizadorRango {
    private simbolo: string;

    constructor(entrada: string) {
        this.simbolo = entrada.charAt(0);
    }

    public analizar(): void {
        // 1. Verificamos si es un signo de puntuación específico
        if (this.simbolo === "." || this.simbolo === "," || this.simbolo === ";" || this.simbolo === ":") {
            console.log(`'${this.simbolo}' es un signo de puntuación.`);
        } 
        // 2. Verificamos el rango numérico (Pista de la consigna)
        else if (this.simbolo >= '0' && this.simbolo <= '9') {
            console.log(`'${this.simbolo}' es una cifra numérica.`);
        } 
        // 3. Cualquier otro caso
        else {
            console.log(`'${this.simbolo}' es algún otro carácter.`);
        }
    }
}

// Pruebas
const pruebaPuntos = new AnalizadorRango(":");
pruebaPuntos.analizar(); 

const pruebaCifra = new AnalizadorRango("7");
pruebaCifra.analizar(); 

const pruebaOtro = new AnalizadorRango("Z");
pruebaOtro.analizar();