export interface ArchivoSubidaParams {
  /** Optional GPS metadata for the upload request. */
  creacion_latitud?:     number | null;
  creacion_longitud?:    number | null;
  creacion_angulo?:      number | null;
  creacion_mac_address?: string | null;
}

export interface ArchivoSubidaResponse {
  /** Cloudinary signed upload parameters returned by the server. */
  [key: string]: unknown;
}
