function getBarMaxHeight(seconds: number, max: number) {
  const maxHeight = 400;
  const height = (maxHeight / max) * seconds;

  return height > 0 ? height : 8;
}

export default getBarMaxHeight;
