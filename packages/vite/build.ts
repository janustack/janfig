export {};

const result = await Bun.build({
  entrypoints: ["./src/main.ts"],
  minify: true,
  outdir: "./dist",
  target: "node",
});

console.log("Build completed:", result);
