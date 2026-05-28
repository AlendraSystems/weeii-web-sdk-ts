import type { TipoAdjunto }       from '../tipo_adjunto/types.js';
import type { TipoNotificacion }  from '../tipo_notificacion/types.js';
import type { Plataforma }        from '../plataforma/types.js';
import type { Aplicacion }        from '../aplicacion/types.js';
import type { EstatusPago }       from '../estatus_pago/types.js';
import type { TipoPago }          from '../tipo_pago/types.js';
import type { Rol }               from '../rol/types.js';
import type { EstatusEntrega }    from '../estatus_entrega/types.js';
import type { Paquete }           from '../paquete/types.js';
import type { Seguro }            from '../seguro/types.js';
import type { AdjuntoReferencia } from '../adjunto_referencia/types.js';

/**
 * Shape of the `informacion_basica` aggregator response.
 * All knowledge of the server contract lives here — update only this file
 * when the server adds, removes, or renames a field.
 */
export interface InformacionBasicaResponse {
  tipo_adjunto:       TipoAdjunto[];
  tipo_notificacion:  TipoNotificacion[];
  plataforma:         Plataforma[];
  aplicacion:         Aplicacion[];
  estatus_pago:       EstatusPago[];
  tipo_pago:          TipoPago[];
  rol:                Rol[];
  estatus_entrega:    EstatusEntrega[];
  paquete:            Paquete[];
  seguro:             Seguro[];
  adjunto_referencia: AdjuntoReferencia[];
  // Scalar / config values — shapes are dynamic and will be refined separately
  IVA:                number;
  parametros:         Record<string, unknown>;
  config:             Record<string, unknown>;
}
