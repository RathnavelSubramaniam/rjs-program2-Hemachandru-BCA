const fs = require("fs");

test("uses the required template literal", () => {
  const code = fs.readFileSync("greet.js", "utf8");

  expect(code).toMatch(
    /return\s*`Hello \$\{name\}, Your age is \$\{age\}\.`;/
  );
});
