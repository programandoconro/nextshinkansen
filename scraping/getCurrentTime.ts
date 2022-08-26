const getTimeJapan = (): String => {
  const timeString = new Date().toLocaleString("ja-JA", {
    timeZone: "Japan",
  });
  const timeJapan = new Date(timeString);
  const hour = timeJapan.getHours();
  const minute = timeJapan.getMinutes();

  return `${addZeros(hour)}:${addZeros(minute)}`;
};

const addZeros = (unitString: number): string => {
  if (unitString < 10) {
    return `0${unitString}`;
  }
  return `${unitString}`;
};

export default getTimeJapan;
