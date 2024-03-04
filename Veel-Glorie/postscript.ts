const fs = require("fs")
const path = require("path")
const nodeCrypto = require("crypto")

const defaultEnv = require("./default-env.js")

function traverseDirectory(currentPath: string) {
  const files = fs.readdirSync(currentPath);
  files.forEach((file: any) => {
    const filePath = path.join(currentPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      traverseDirectory(filePath)
    } else {
      replaceInFile(filePath)
    }
  })
}

function replaceInFile(filePath: string) {
  if (!path.extname(filePath).includes([".txt", ".html", ".xml", ".json", ".js", ".css", ".svg"])) {
    return
  }
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

traverseDirectory("dist/")
