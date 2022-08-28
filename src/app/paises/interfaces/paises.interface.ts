export interface PaisSmall {
    name: Name;
    cca2: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    spa: SPA;
}

export interface SPA {
    official: string;
    common:   string;
}

export interface PaisPorCodigo{
    name: Name;
    borders: string[]
}