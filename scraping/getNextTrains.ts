import getTimeJapan, { addZeros } from "./getCurrentTime";

export type NextTrains = string[];

const getNextTrains = (data: NextTrains): NextTrains => {
  const timeJapan = getTimeJapan();
  const [hoursNow, minutesNow] = timeJapan.split(":");
  const timeUntilNextTrains: NextTrains = [];

  data.forEach((time) => {
    const [hoursNext, minutesNext] = time.split(":");
    if (timeJapan < time) {
      let diffHour = Number(hoursNext) - Number(hoursNow);
      let diffMin = Number(minutesNext) - Number(minutesNow);
      if (diffMin < 0) {
        diffHour = diffHour - 1;
        diffMin = 60 - Number(minutesNow) + Number(minutesNext);
      }
      const timeToShow = `${diffHour}:${addZeros(diffMin - 1)}`;
      timeUntilNextTrains.push(timeToShow);
    }
  });
  return timeUntilNextTrains;
};

export default getNextTrains;
