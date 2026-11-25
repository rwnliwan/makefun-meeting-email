// makefun-meeting-email — entry for "The Meeting That Should Have Been an Email"
// (u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9).
// Writes one joke line, at most 200 characters, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "Our AI notetaker summarized the hour-long meeting in one line: 'This should have been an email.'";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_TEXT, "utf8");
console.log(`Wrote ${ENTRY_TEXT.length} characters to ${OUTPUT_PATH}`);
