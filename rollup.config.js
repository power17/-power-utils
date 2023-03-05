// 压缩
import { terser } from "rollup-plugin-terser";
// 查看打包大小
import filesize from "rollup-plugin-filesize";

import baseConfig from "./rollup.config.base.js";

export default {
  ...baseConfig,
  plugins: [...baseConfig.plugins, terser(), filesize()],
};
