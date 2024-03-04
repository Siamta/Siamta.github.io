const fs = require("fs")
const path = require("path")
const nodeCrypto = require("crypto")

const defaultEnv = require("./default-env.js")

function traverseDirectory(directory: string, deep: number = 0) {
  console.log(`${" ".repeat(deep)}DIR: ${directory}`)
  const files = fs.readdirSync(directory);
  files.forEach((file: any) => {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      traverseDirectory(filePath, deep + 1)
    } else {
      replaceInFile(filePath, deep)
    }
  })
}

function replaceInFile(filePath: string, deep: number) {
  if (![".txt", ".html", ".xml", ".json", ".js", ".css", ".svg"].some(ext => ext === path.extname(filePath))) {
    return
  }
  console.log(`${" ".repeat(deep)}file: ${filePath}`)
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const replacedContent = replaceVariables(fileContent);
  fs.writeFileSync(filePath, replacedContent, "utf-8")
}

function replaceVariables(content: string): string {
  return content.replace(/postprocess_([a-zA-Z0-9_]+)/g, (_, key) => {
    if (key === "HASH") {
      return generateHash("dist/index.html");
    } else if (defaultEnv.hasOwnProperty(key)) {
      return defaultEnv[key];
    }
    throw new Error(`Key ${key} not found in object`);
  });
}

function generateHash(filePath: string): string {
  const fileContent = fs.readFileSync(filePath)
  const hash = nodeCrypto.createHash('sha256').update(fileContent).digest('hex')
  return hash.substring(0, 6);
}

function main() {
  console.log("\nPostscript start!\n")
  traverseDirectory("dist/")
  console.log("\nPostscript done!")
}

main()
