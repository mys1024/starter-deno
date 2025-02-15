import { assertEquals } from "@std/assert";
import { about } from "./main.ts";

Deno.test("about()", () => {
  assertEquals(about(), "This is a Deno stater template 🦕");
});
