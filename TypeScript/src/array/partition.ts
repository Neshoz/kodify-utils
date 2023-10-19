type Predicate<T> = (item: T, index: number, array: T[]) => boolean;

export type Partition<T> = [T[], T[]];

export function partition<T>(
  array: T[],
  predicate: Predicate<T>
): Partition<T> {
  const truthy: T[] = [];
  const falsy: T[] = [];

  for (const [i, item] of array.entries()) {
    predicate(item, i, array) ? truthy.push(item) : falsy.push(item);
  }

  return [truthy, falsy];
}
