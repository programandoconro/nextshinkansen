import type { NextApiRequest, NextApiResponse } from "next";
import getNextTrains, { NextTrains } from "../../scraping/getNextTrains";
import scrapPage from "../../scraping/scrapPage";

const url =
  "https://www.navitime.co.jp/diagram/depArrTimeList?departure=00007420&arrival=00007421&line=00000089&updown=1";
export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<NextTrains>
) {
  const allDates = await scrapPage(url);
  const nextTrains = getNextTrains(allDates);
  res.status(200).json(nextTrains);
}
