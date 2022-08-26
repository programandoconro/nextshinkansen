import getNextTrains, { NextTrains } from "./getNextTrains";

const scrapPage = async (url: string): Promise<NextTrains> => {
  const dates: NextTrains = [];
  const rowReg = new RegExp("time dep");
  const inLineReg = new RegExp("[0-9]{2}:[0-9]{2}"); // or const inLineReg = /\d{2}:\d{2}/;

  const response = await fetch(url);
  const page = await response.text();
  const rows = page.split("\n");

  rows.forEach((line) => {
    const isMatch = line.match(rowReg);
    if (isMatch) {
      const timeMatch = line.match(inLineReg);
      if (timeMatch) {
        dates.push(timeMatch[0]);
      }
    }
  });
  getNextTrains(dates);

  return dates;
};

export default scrapPage;
