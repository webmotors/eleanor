import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  external: ['styled-components'],
  input: 'src/index.ts',
  globals: { 'styled-components': 'styled' },
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    commonjs({
        exclude: 'src/**',
        include: 'node_modules/**',
        namedExports: {
          'node_modules/react/index.js': [
            'cloneElement',
            'createContext',
            'Component',
            'createElement',
            'Fragment'
          ],
          'node_modules/react-dom/index.js': ['render', 'hydrate'],
          'node_modules/react-is/index.js': [
            'isElement',
            'isValidElementType',
            'ForwardRef'
          ]
        }
      })
  ]
}
