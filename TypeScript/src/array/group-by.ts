type Predicate<T> = (item: T, index: number) => string;

export type GroupBy<T> = Record<string, T[]>;

export function groupBy<T>(array: T[], predicate: Predicate<T>) {
  return array.reduce((acc, curr, index) => {
    const key = predicate(curr, index);

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(curr);
    return acc;
  }, {} as GroupBy<T>);
}
