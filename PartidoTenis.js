
// programa que muestre como va avanzando un partido de tenis y quien lo gana.

const matchTenis = () => {

    class Jugador {
        constructor(nombre) {
            this.nombre = nombre;
            this.puntos = 0;
        }

        ganarPunto() {
            this.puntos++;
        }

        resetearPuntos() {
            this.puntos = 0;
        }
    }

    class Partido {
        constructor(jugador1, jugador2) {
            this.jugador1 = jugador1;
            this.jugador2 = jugador2;
            this.sets = 0;
        }

        jugarSet() {
            while (true) {
                this.jugador1.ganarPunto();
                this.jugador2.ganarPunto();
            
                if (this.jugador1.puntos >= 6 && this.jugador1.puntos 
                    > this.jugador2.puntos) {

                        this.jugador1.resetearPuntos();
                        this.jugador2.resetearPuntos();
                        this.sets++;
                        break;

                } else if (this.jugador2.puntos >= 6 && this.jugador2.puntos 
                    >  this.jugador1.puntos) {

                     this.jugador1.resetearPuntos();
                     this.jugador2.resetearPuntos();
                     this.sets++;
                     break;   
                }
            }
        }

        terminarPartido() {
            while (this.sets < 2) {
                this.jugarSet();
            }
        }

        getGanador() {
            if (this.jugador1.puntos > this.jugador2.puntos) {
                
                return this.jugador1.nombre;
            } else {
                return this.jugador2.nombre;
            }
        }
    }

    let jugador1 = new Jugador("Novak Djokovic");
    let jugador2 = new Jugador("Del Potro");

    let partido = new Partido(jugador1, jugador2);

    partido.terminarPartido();

    console.log(`El ganador del partido es: ${partido.getGanador()}`);
}

matchTenis();