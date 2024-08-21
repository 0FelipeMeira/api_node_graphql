export function parseNumberOrNull(value: string) {
  const parsedValue = Number(value);
  if (!Number.isNaN(parsedValue)) {
    return parsedValue;
  }
  return null;
}
