import { assertEquals } from "@std/assert";
import { add } from "../src/main.ts";

Deno.test("add()", () => {
  assertEquals(add(1, 2), 3);
});
