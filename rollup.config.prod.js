import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const outputDir = './dist/';

export default [{
  input: ['src/index.ts'],
  output: [
    {
      file: outputDir + pkg.module,
      format: 'es',
      sourcemap: true
    },
    {
      file: outputDir + pkg.main,
      name: 'markerjs2',
      format: 'umd',
      sourcemap: true
    }
  ],
  plugins: [typescript()]
}];
