interface ReqResListado {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Usuario[];
    support: Support;
}

interface Usuario {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface Support {
    url: string;
    text: string;
}

export type {ReqResListado, Usuario}