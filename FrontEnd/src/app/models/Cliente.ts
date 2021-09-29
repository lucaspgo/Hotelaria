export interface Cliente {
    id?: number;
    cpf: string;
    nome: string;
    reservas?: [];
    criadoEm?: string;
}
