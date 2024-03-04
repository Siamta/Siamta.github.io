import fs from "fs"
import path from "path"

import defaultEnv from "./default-env.js"

function traverseDirectory(currentPath: string) {
  const files = fs.readdirSync(currentPath);
  files.forEach((file) => {
    const filePath = path.join(currentPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      traverseDirectory(filePath)
    } else {
      replaceInFile(filePath)
    }
  })
}

function replaceInFile(filePath: string) {
  if (!isTextFile(filePath)) {
    return
  }
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const replacedContent = fileContent
    .replace(/\{process\.env\.RANDOM\}/g, defaultEnv.RANDOM)
    .replace(/\{process\.env\.SITE_NAME\}/g, defaultEnv.SITE_NAME)
  fs.writeFileSync(filePath, replacedContent, "utf-8")
}

function isTextFile(filePath: string): boolean {
  try {
    fs.readFileSync(filePath, "utf-8")
  } catch (error) {
    return false
  }
  return true
}

traverseDirectory("dist/")
