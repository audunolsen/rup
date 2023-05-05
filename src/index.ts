export const noop = () => {};
export const isUndefined = (val: unknown): val is undefined =>
  typeof val === "undefined";
