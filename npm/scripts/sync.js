import { cpSync, readFileSync, rmSync, writeFileSync } from "node:fs";

/* -------------------------------------------------- sync the "src" directory -------------------------------------------------- */

cpSync("../src", "./src", { recursive: true });
console.log('Synced the "src" directory.');

/* -------------------------------------------------- sync the "version" in package.json -------------------------------------------------- */

const denoJson = JSON.parse(
  readFileSync("../deno.json", { encoding: "utf-8" }),
);
const packageJson = JSON.parse(
  readFileSync("./package.json", { encoding: "utf-8" }),
);

packageJson.version = denoJson.version;
writeFileSync("./package.json", JSON.stringify(packageJson, undefined, 2));
console.log(`Synced the version: "${packageJson.version}".`);

/* -------------------------------------------------- sync the "README.md" and "LICENSE" -------------------------------------------------- */

cpSync("../README.md", "./README.md");
cpSync("../LICENSE", "./LICENSE");
console.log('Synced the "README.md" and "LICENSE".');
