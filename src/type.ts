//

type PrimitiveType = string | number | boolean | null;

type StructureType = ObjectType | ArrayType;

type JsonType = PrimitiveType | StructureType;

interface ObjectType extends Record<string, JsonType> {
}

interface ArrayType extends Array<JsonType> {
}

export {
  JsonType,
};
