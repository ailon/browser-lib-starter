import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';

const outputDir = './dist/';

export default [{
  input: ['./src/index.ts'],
  output: {
    dir: './dts/'
  },
  plugins: [
    del({ targets: ['dts/*', 'dist/*']}),
    typescript({ 
      declaration: true, 
      outDir: './dts/', 
      rootDir: './src/', 
      exclude: ['./test/**/*', './dts/**/*', './dist/**/*'] 
    }),
  ]
}, {
  input: "./dts/index.d.ts",
  output: [{ file: `./dist/${pkg.name}.d.ts`, format: "es" }],
  plugins: [dts()],
}, {
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
  plugins: [
    typescript(),
    terser(),
    del({ targets: ['dts/*']})
  ]
}];
