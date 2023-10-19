export function findLastIndex<T>(
  array: T[],
  predicate: (item: T, index: number) => boolean
) {
  let _index = -1;

  array.forEach((item, index) => {
    if (predicate(item, index)) {
      _index = index;
    }
  });

  return _index;
}
