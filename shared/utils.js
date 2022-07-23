export const cutDescription = (string, maxLength) => {
  return string.length >= maxLength
    ? string.slice(1, maxLength) + '...'
    : string
}
