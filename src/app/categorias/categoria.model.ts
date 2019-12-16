export interface Categoria {
    id: number;
    name: string;
    tipo: string;
}

export interface ResponseCategoria {
    page: number;
    per_page: number;
    total: number;
    data: Categoria[];
}
export interface RequestCreate {
    name: string;
    tipo: string;
}
export interface ResponseCreate {
    name: string;
    tipo: string;
    id: string;
    createdAt: Date;
}

export interface ResponseCategoria {
    data: Categoria[];
}
// update
export interface RequestUpdate {
    name: string;
    tipo: string;
}
export interface ResponseUpdate {
    name: string;
    tipo: string;
    updatedAt: Date;
}