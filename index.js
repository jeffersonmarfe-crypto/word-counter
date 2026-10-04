import { readFile } from "fs/promises";
import path from "path";

const filename = process.argv[2];

if (!filename) {
  console.log("Please provide a filename.");
  console.log("Usage: npm start sample.txt");
  process.exit(1);
}

try {
  const filePath = path.resolve(filename);
  const text = await readFile(filePath, "utf-8");

  const lines = text.split(/\r?\n/).length;

  const words = text.trim() === ""
    ? 0
    : text.trim().split(/\s+/).length;

  const characters = text.length;

  console.log(`File: ${filename}`);
  console.log(`Lines: ${lines}`);
  console.log(`Words: ${words}`);
  console.log(`Characters: ${characters}`);
} catch (error) {
  console.log(`Error: Could not read file "${filename}".`);
  console.log("Please make sure the file exists and try again.");
}