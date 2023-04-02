export const humanizeTime = (hours: number, minutes: number, seconds: number): string =>
  `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

export const getCreationTime = (created: number): string => {
  const date = new Date(created);

  return `${date.toString()}`;
};
