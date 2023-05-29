import { complement, pipe, isEmpty, isNil, either, not } from "ramda";

export const isPresent = pipe(either(isNil, isEmpty), not);

export const isNotPresent = complement(isPresent);

export const noop = () => {};

export const isEven = number => number % 2;

export const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
