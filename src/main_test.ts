import { assertEquals } from "./deps.ts";
import { add } from "./main.ts";

Deno.test("example test", () => {
  assertEquals(add(1, 2), 3);
});
