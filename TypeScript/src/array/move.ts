export function move<T>(array: T[], from: number, to: number): T[] {
  const _array = Array.from(array);
  const tmp = array[to];

  _array[to] = array[from];
  _array[from] = tmp;

  return _array;
}
