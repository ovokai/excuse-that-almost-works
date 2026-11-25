import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "so sorry, water heater's leaking into the downstairs unit, plumber's here, can't leave till it's fixed";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
  console.log("wrote /output/entry.txt");
} catch {
  writeFileSync("entry.txt", entry, "utf8");
  console.log("wrote entry.txt");
}
