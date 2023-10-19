export function getSystemUTCOffset() {
  const offset = new Date().getTimezoneOffset();
  // A negative offset means the system is ahead of UTC
  const symbol = Math.sign(offset) === -1 ? "+" : "-";
  const hours = String(Math.floor(Math.abs(offset / 60))).padStart(2, "0");
  const minutes = String(Math.abs(offset % 60)).padEnd(2, "0");

  return `${symbol}${hours}:${minutes}`;
}
