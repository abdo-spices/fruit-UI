import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";

/**
 * @type {import('rollup').RollupOptions}
 */

export default [
  {
    input: "./fruitUI/src/ts/fruitui.modules.ts",
    output: [
      {
        file: './fruitUI/dist/js/fruitui.modules.js',
        sourcemap: true,
        format: 'es',
      },
      {
        file: './fruitUI/index.js',
        sourcemap: true,
        format: 'es',
      }
    ]
    , plugins: [typescript()],
  },
  {
    input: "./fruitUI/src/ts/fruitui.html.ts",
    output: {
      file: './fruitUI/dist/js/fruitui.html.js',
      sourcemap: true,
      format: 'cjs',
    },
    plugins: [typescript(), babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              firefox: "10",
              chrome: "10",
            },
          },
        ],
      ],
    })],
  }
]