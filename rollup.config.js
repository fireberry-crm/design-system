import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: packageJson.main, format: 'cjs', sourcemap: true },
      { file: packageJson.module, format: 'esm', sourcemap: true },
    ],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      terser(),
      url({
        include: ['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2'],
        limit: 1000000, // 1mb
      }),
    ],
    external: Object.keys(packageJson.peerDependencies),
  },
];
