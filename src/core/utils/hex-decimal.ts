export function decimalToHex(nb: number): string {
  const hexValue = nb.toString(16);
  return ("000000"+hexValue).slice(-hexValue.length);
}