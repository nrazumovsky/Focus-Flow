function getMinutesSuffix(numberOfMinutes: number): string {
  const formattedNumber = numberOfMinutes.toString();

  if (formattedNumber.endsWith("1")) {
    return "минуту";
  }
  if (
    formattedNumber.endsWith("1") ||
    formattedNumber.endsWith("2") ||
    formattedNumber.endsWith("3") ||
    formattedNumber.endsWith("4")
  ) {
    return "минуты";
  }
  return "минут";
}

export default getMinutesSuffix;
