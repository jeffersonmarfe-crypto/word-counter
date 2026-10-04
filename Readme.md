# Word & Line Counter CLI

A small Node.js command-line tool that reads a text file and prints the number of **lines**, **words**, and **characters**.

## Features
- Counts lines, words, and characters in a text file
- Shows a helpful message when no filename is given
- Handles missing files gracefully (no crash)
- Accepts multiple files at once
- `--top` flag prints the 5 most common words
- `--ignore-empty` flag skips empty lines when counting lines
- Colored output using ANSI codes

## Requirements
- [Node.js](https://nodejs.org/) 18 or newer

No extra packages to install.

## Installation
```bash
git clone <your-repo-link>
cd word-counter
```

## Usage
```bash
npm start <filename>
```

### Example
```bash
npm start sample.txt
```

### Output
```text
File: sample.txt
Lines: 7
Words: 52
Characters: 377
```

### Options
| Option | Description |
|---|---|
| `--top` | Also prints the 5 most common words |
| `--ignore-empty` | Ignores empty lines when counting lines |

### More examples
```bash
# Multiple files
npm start sample.txt notes.txt

# Show the 5 most common words
npm start sample.txt --top

# Ignore empty lines
npm start sample.txt --ignore-empty
```

### No filename given
```bash
npm start
```
Prints a usage message and exits.

### File does not exist
```bash
npm start missing.txt
```
```text
Error: File not found: missing.txt
```

## Project Structure
```text
word-counter/
├── index.js        # CLI entry point
├── counter.js      # Counting logic (countText, topWords)
├── sample.txt      # Sample input file
├── package.json    # Project config ("type": "module", start script)
└── README.md
```

## Concepts Practiced
| Concept | Where |
|---|---|
| `process.argv` | Reading the filename |
| `fs/promises` | Reading the file asynchronously |
| `path` | Resolving file paths |
| ES Modules | `import` statements |
| Error handling | `try/catch` around the file read |
| npm scripts | `npm start` |
| Custom module | `counter.js` |

## Author
Your Name, Marfe