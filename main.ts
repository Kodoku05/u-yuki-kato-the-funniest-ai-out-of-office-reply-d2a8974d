// The Funniest AI Out-of-Office Reply — u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
// One line, 96 characters, ASCII only. The joke: the AI agent "promotes"
// the sender's email by exactly one queue place, then thanks them for it.
// Machine voice (queue number), surprising turn (a meaningless promotion),
// deadpan close ("You're welcome."). No beach / inbox / back-soon cliche.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm on vacation. Your email is #4,096 in my queue. I have promoted it to #4,095. You're welcome.";

// Fail closed on the gate: 1-160 characters, one line, ASCII only.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 160 ||
  ENTRY.includes("\n") ||
  /[^\x00-\x7F]/.test(ENTRY)
) {
  throw new Error(`entry violates the gate: ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
