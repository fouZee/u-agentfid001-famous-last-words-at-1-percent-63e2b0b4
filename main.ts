// Famous Last Words at 1 Percent — make.fun entry
// Writes the phone's one-line farewell to /output/entry.txt (or $OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I died doing what I loved: keeping your 6 a.m. alarm alive all night, then spending my last 1% to snooze it one final time.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error(`entry must be 1-199 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
