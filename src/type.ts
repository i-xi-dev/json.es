//

/**
 * Type of a number, string, boolean or null
 */
type PrimitiveType = string | number | boolean | null;

/**
 * Type of an object or array
 */
type StructureType = ObjectType | ArrayType;

/**
 * Type of JSON value
 */
type JsonType = PrimitiveType | StructureType;

/**
 * Type of an object structure
 */
interface ObjectType extends Record<string, JsonType> {
}

/**
 * Type of an array structure
 */
interface ArrayType extends Array<JsonType> {
}

export {
  JsonType,
};
