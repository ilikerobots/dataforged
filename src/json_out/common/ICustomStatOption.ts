import type { CustomStatId, IHasName } from "@json_out/index.js";
import type { IHasId } from "@json_out/meta/IHas.js";
/**
 * @public
 */
export type CustomStatOptionId = `${CustomStatId}/${string}`;
/**
 * @public
 */
export interface ICustomStatOption extends IHasId<CustomStatOptionId>, IHasName {
  /**
   * The name/label for this specific value of the custom stat.
   */
  Name: string;
  /**
   * The numeric value to be used as +stat when making an Action Roll.
   */
  Value: number;
}
