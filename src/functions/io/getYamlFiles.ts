

import fs from "fs";
const basePath: fs.PathLike = "./src/data";

/**
 * It returns an array of all the yaml filepaths in the directory.
 * @param [dir] - The directory to search in.
 * @param root - The root directory of the project.
 * @returns An array of file paths.
 */
export default function getYamlFiles(dir = "", root = basePath): fs.PathLike[] {
  const path = dir.length ? `${root.toString()}/${dir}` as fs.PathLike : root;
  return fs
    .readdirSync(path)
    .filter(file => !file.startsWith("_") && !file.startsWith(".") && file.match(/.*\.yaml/))
    .map(str => (`${path.toString()}/${str}`));
}
