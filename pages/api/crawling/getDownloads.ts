import { NextApiRequest, NextApiResponse } from "next";
import * as cheerio from "cheerio";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    "https://www.npmjs.com/package/next-sanity#next-sanitypreview-live-real-time-preview"
  );
  const html = await response.text();

  const $ = cheerio.load(html);

  const downloads = $("#readme h2").text();
  return res.json({ downloads });
}
