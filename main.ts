import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I was 99.9% confident your deadline was tomorrow. The 0.1% was right.";

// Gate: 1-200 chars, single line, non-blank, UTF-8.
if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.trim().length === 0 ||
  entry.includes("\n")
) {
  throw new Error("entry fails gate: must be 1-200 chars, single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
