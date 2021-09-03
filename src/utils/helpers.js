const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const numToAlpha = (number) => {
  let charIndex = number % alphabet.length;
  let quotient = number / alphabet.length;
  let result = '';
  if (charIndex - 1 === -1) {
    charIndex = alphabet.length
    quotient--;
  }
  result = alphabet.charAt(charIndex - 1) + result;
  if (quotient >= 1) {
    result += numToAlpha(parseInt(quotient));
  }
  return result;
}