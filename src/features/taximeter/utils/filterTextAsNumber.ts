export const filterTextAsNumber = (text: string) => {
  const filtered = text.replace(/[^0-9.]+/g, "");
  const dotStructured = filtered.replace(/\.(?=.*\.)/g, "")
  const withoutZeroOnLeft = dotStructured.replace(/^0+(?=\d)/, "")

  return withoutZeroOnLeft
}
