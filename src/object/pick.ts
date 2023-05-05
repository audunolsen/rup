type Disjoint<T, U> = Exclude<T | U, T & U>;
type Flatten<T> = { [K in keyof T]: T[K] } & {};

/**
 * TS Pick-utility that returning tuple with object from
 * picked keys AND rest object with omitted keys.
 *
 * Typical usecases
 * - When you otherwise would want to destructure
 * object to type-narrow/disregard keys which
 * typically would trigger `no-unused-var` eslint rule
 *
 * - When you want to destructure without wiping
 * out namespace/creating a lot of variables polluting
 * the scope and looking obnoxiously verbose because
 * they occupy one line each.
 */
function pick<T, K extends keyof T>(
  obj: T,
  keys: readonly K[]
): [Flatten<Pick<T, K>>, Flatten<Pick<T, Disjoint<keyof T, K>>>];

function pick(obj: Record<string, unknown>, keys: readonly string[]) {
  type Tuple<T = [string, unknown][]> = [T, T];

  const [picked, rest] = Object.keys(obj).reduce<Tuple>(
    (acc, key) => {
      acc[keys.includes(key) ? 0 : 1].push([key, obj[key]]);
      return acc;
    },
    [[], []]
  );

  return [Object.fromEntries(picked), Object.fromEntries(rest)];
}

export default pick;
