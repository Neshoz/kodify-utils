type Options = {
  includeFirst?: boolean;
  includeLast?: boolean;
};

function everyNth<T>(array: T[], nth: number, options?: Options) {
  const result: T[] = [];

  if (options?.includeFirst) {
    result.push(array[0]);
  }

  for (const [index, item] of array.entries()) {
    if (index % nth === nth - 1) {
      result.push(item);
    }
  }

  if (
    options?.includeLast &&
    result[result.length - 1] !== array[array.length - 1]
  ) {
    result.push(array[array.length - 1]);
  }

  return result;
}
