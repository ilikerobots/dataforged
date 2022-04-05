import { is } from "typescript-is";
import type { IRowRollYaml } from "../../types/oracles/interfaces/yaml/IRowYaml.js";
import type IRowYaml from "../../types/oracles/interfaces/yaml/IRowYaml.js";

/**
 * Extracts the first two elements (floor and ceiling) of a raw row array.
 * @param {IRowYaml | IRowRollYaml} row - IRowYaml | IRowRollYaml
 * @returns The first two elements of the array.
 */
export default function extractRowRolls(row: IRowYaml | IRowRollYaml): IRowRollYaml {
  if (!Array.isArray(row)) {
    throw new Error(`Received an invalid row array ${JSON.stringify(row)}`);
  }
  const output = row.filter((item) => is<IRowYaml[0]>(item)).slice(0, 2);
  return output as IRowRollYaml;
}
