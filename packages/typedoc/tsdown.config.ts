import { defineConfig } from "tsdown";

export default defineConfig({
	dts: true,
	entry: "src/index.ts",
	minify: true,
	sourcemap: "inline",
});
