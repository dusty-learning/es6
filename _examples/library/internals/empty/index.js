import { curry, isArguments, isArray, isFunction, isNull, isObject, isString } from '../../index.js';

export default curry(x => { // eslint-disable-line complexity
  if (!isNull(x)) {
    if (isFunction(x.empty)) {
      return x.empty();
    }

    if (isArray(x)) {
      return [];
    }

    if (isString(x)) {
      return '';
    }

    if (isObject(x)) {
      return {};
    }

    if (isArguments(x)) {
      (function emptyArgs(...args) {
        return args;
      }());
    }
  }

  return 0;
});