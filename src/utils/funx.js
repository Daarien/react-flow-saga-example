/* @flow */

type Record<K, V> = { [K]: V };

type Obj = Record<string, any>;

export function isOK(obj: Obj) {
  return obj.hasOwnProperty("error") === false;
}
