export const makePrettyTime = (milliseconds: number) => {
  const date = new Date(milliseconds);

  if (date.getMinutes() >= 1)
    return `${date.getMinutes()}:${
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
    } `;

  return `${date.getSeconds()}:${date.getMilliseconds()} `;
};
