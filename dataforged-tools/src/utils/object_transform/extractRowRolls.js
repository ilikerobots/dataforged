import { is } from "typescript-is";
/**
 * Extracts the first two elements (floor and ceiling) of a raw row array.
 * @param row - IRowYaml | IRowRollYaml
 * @returns The first two elements of the array.
 */
export function extractRowRolls(row) {
    if (!Array.isArray(row)) {
        throw new Error(`Received an invalid row array ${JSON.stringify(row)}`);
    }
    const output = row.filter((item) => is(item)).slice(0, 2);
    return output;
}
