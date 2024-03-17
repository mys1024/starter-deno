import { assertEquals } from "@std/assert";
import { about } from "../src/main.ts";

Deno.test("about()", () => {
  assertEquals(about(), "This is Deno stater template 🦕.");
});
