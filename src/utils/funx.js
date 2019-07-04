/* @flow */

type Record<T = string, V = any> = { [T]: V };

type Obj = Record<string, any>;

export function isOK(obj: Obj) {
  return obj.hasOwnProperty("error") === false;
}
