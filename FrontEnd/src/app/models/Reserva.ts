import { Cliente } from './Cliente';
import { Quarto } from './Quarto';
export interface Reserva {
    id?: number;
    numero: string;
    quarto: Quarto;
    cliente: Cliente;
    inicio: Date;
    fim: Date;
}
