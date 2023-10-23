/**
 * Strips the timezone part of a date string
 * @param dateString A datetime string with timezone in it.
 * Example: 20231023T12.55.03Z for UTC, or 20231023T12.55.03+06:00 where +06:00 is the timezone offset.
 * @returns
 */
export function stripTimezone(
  dateString: string | undefined
): string | undefined {
  if (!dateString) {
    return undefined;
  }

  if (dateString.includes("Z")) {
    return dateString.split("Z")[0];
  }

  return dateString.replace(/[+-]\d\d:\d\d$/, "");
}
