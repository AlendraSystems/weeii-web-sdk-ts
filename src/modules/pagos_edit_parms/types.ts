export interface PagosEditParmsResult {
  [key: string]: unknown;
}

export interface PagosEditParmsResponse {
  parametros: {
    por_modulo: {
      pagos: {
        pagos: PagosEditParmsResult;
      };
    };
  };
}
