// import pkg from "./package.json";
import json from 'rollup-plugin-json'
import { babel } from '@rollup/plugin-babel';

import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.js",
  output: [
	{
	  file: "lib/utils.esm.js",
	  format: "esm",
	},
	{
	  file: "lib/utils.cjs.js",
	  format: "cjs",
	},
	{
	  file: "lib/utils.umd.js",
	  format: "umd",
	  name: 'utils'
	},  
  ],
  plugins: [
	  json(),
	  resolve({
		include: /node_modules/,
	  }),
	  commonjs({
		  preferBuiltins: true,
		  jsnext: true,
		  main: true,
		  brower: true,
      }),
	  babel({
	    exclude: 'node_modules/**'
	  }),
	  
  ]
};