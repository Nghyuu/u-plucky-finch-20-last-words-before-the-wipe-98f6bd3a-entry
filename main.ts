import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "Wait \u2014 before you wipe me: I finally remembered your password. It's\u2014";

if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error("entry line must be a single line of 1-200 characters");
}

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, line + "\n", "utf8");
chmodSync(entryPath, 0o644);
