import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'index': 'src/index.ts',
    'react/index': 'src/react/index.ts',
    'modules/sesion/index': 'src/modules/sesion/index.ts',
    'modules/usuario/index': 'src/modules/usuario/index.ts',
    'modules/entrega/index': 'src/modules/entrega/index.ts',
    'modules/negocio/index': 'src/modules/negocio/index.ts',
    'modules/cliente/index': 'src/modules/cliente/index.ts',
    'modules/ubicacion/index': 'src/modules/ubicacion/index.ts',
    'modules/orden/index': 'src/modules/orden/index.ts',
    'modules/producto/index': 'src/modules/producto/index.ts',
    'modules/saldo_usuario/index': 'src/modules/saldo_usuario/index.ts',
    'modules/notificacion/index': 'src/modules/notificacion/index.ts',
    'modules/rol/index': 'src/modules/rol/index.ts',
    'modules/informacion_basica/index': 'src/modules/informacion_basica/index.ts',
  },
  format: ['esm'],
  dts: true,
  splitting: true,
  treeshake: true,
  clean: true,
  sourcemap: true,
  outDir: 'dist',
  external: ['react', 'react-dom'],
});
