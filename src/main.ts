/**
 * This is a Deno stater template 🦕
 */

/**
 * Return a string about the project.
 * @returns the string about the project.
 */
export function about(): string {
  return "This is a Deno stater template 🦕";
}

// Print the about string if this file is the entry point.
if (import.meta.main) {
  console.log(about());
}
