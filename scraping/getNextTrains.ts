import getTimeJapan from "./getCurrentTime";

export type NextTrains = string[];

const getNextTrains = (data: NextTrains): NextTrains => {
  const timeJapan = getTimeJapan();
  const result = data.filter((time) => timeJapan < time);
  return result;
};

export default getNextTrains;
