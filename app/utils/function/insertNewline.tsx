export function insertNewline(str: string) {
  if (str.length >= 8) {
    const firstSpaceIndex = str.indexOf(" ");

    if (firstSpaceIndex !== -1) {
      const modifiedStr =
        str.substring(0, firstSpaceIndex) +
        "\n" +
        str.substring(firstSpaceIndex + 1);
      return modifiedStr;
    }
  }

  return str;
}
