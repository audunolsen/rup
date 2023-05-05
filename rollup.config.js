import { defineConfig } from "rollup";
import multi from "@rollup/plugin-multi-entry";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  /**
   * Creates entrypoint for all files in src/ that do not start with an underscore.
   * Underscore files are internally used files and should not be exported.
   */
  // input: "src/**/!(_)*.@(ts|tsx)",
  input: {
    index: "src/index.ts",
    object: "src/object/index.ts",
  },
  output: {
    format: "es",
    dir: "dist",
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [typescript()],
});
