
type JsonPrimitive = string | number | boolean | null;

type JsonStructure = JsonObject | JsonArray;

type JsonType = JsonPrimitive | JsonStructure;

interface JsonObject extends Record<string, JsonType> {
}

interface JsonArray extends Array<JsonType> {
}

export {
  JsonType,
};
