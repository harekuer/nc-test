import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import url from '@rollup/plugin-url'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/components.esm.js',
      format: 'es',
    },
    {
      file: './dist/components.min.js',
      format: 'iife',
      name: 'newchicComponents',
      plugins: [
        getBabelOutputPlugin({
          presets: ['@babel/preset-env'],
          allowAllFormats: true,
        }),
        terser(),
      ],
    },
  ],
  plugins: [
    postcss({
      use: ['sass'],
      inject: false,  // 内联模式
      plugins: [],
      extensions: ['.scss', '.css'],
    }),
    url(),
  ],
  treeshake: {
    moduleSideEffects: ['*.css'],
  },
  watch: {
    include: 'src/**',
    buildDelay: 2000,
  },
}
