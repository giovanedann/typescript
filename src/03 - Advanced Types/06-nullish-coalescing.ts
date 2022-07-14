/*
  This is not a type exactly, is an operator that is available until ES2020.

  The nullish coalescing operator works like the OR operator (||), but only tests nullish values, in other words, null and undefined.

  Unlike OR, that tests all falsy values.
*/

console.log(false || 0 || '' || undefined || NaN || null || 'All values before me are falsy');
console.log(false ?? 0 ?? '' ?? NaN ?? undefined ?? null ?? 'Not reached :(');
console.log(undefined ?? null ?? '' ?? NaN ?? false ?? 0 ?? 'Not reached :(');

/*
  In the first console log, all values before the string are falsy, so the return is the string.
  In the second console.log, only the nullish values are testes, so the log is false
  In the third console.log, the return is '' because the first 2 values are nullish
*/