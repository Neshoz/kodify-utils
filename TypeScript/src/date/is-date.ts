export function isDate(value: unknown): value is Date {
  return (
    value instanceof Date &&
    !isNaN(value.getTime()) &&
    Object.prototype.toString.call(value) === "[object Date]"
  );
}
