import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

/**
 * @type {import('rollup').RollupOptions}
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "./fruitUI/src/ts/fruitUI.ts",
  
  output: [{
    dir: "./fruitUI/dist/js",
    format: "cjs",
    sourcemap: true,
  },{
    file: "./fruitUI/dist//js/fruit.min.js",
    sourcemap: true,
    format: "cjs",
    plugins: [terser()]
  }


  ],
  plugins: [
    typescript({tsconfig: "./tsconfig.json"}),
    babel({
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
    }),
  ],
};

