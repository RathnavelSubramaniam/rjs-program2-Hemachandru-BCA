const acorn = require("acorn");
const fs = require("fs");

const code = fs.readFileSync("index.js", "utf8");

const ast = acorn.parse(code, {
  ecmaVersion: "latest"
});

let found = false;

function walk(node) {
  if (!node) return;

  if (
    node.type === "ReturnStatement" &&
    node.argument &&
    node.argument.type === "TemplateLiteral"
  ) {
    found = true;
  }

  for (const key in node) {
    const value = node[key];

    if (Array.isArray(value)) {
      value.forEach(walk);
    } else if (value && typeof value === "object") {
      walk(value);
    }
  }
}

walk(ast);

if (!found) {
  throw new Error("Return value is not a template literal.");
}
