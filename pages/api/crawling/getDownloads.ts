import { NextApiRequest, NextApiResponse } from "next";
import * as cheerio from "cheerio";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    "https://shopee.vn/search?keyword=c%C3%A2y%20lau%20nh%C3%A0&page=0&sortBy=sales"
  );
  const html = await response.text();

  const $ = cheerio.load(html);

  const downloads = $(".r6HknA .uEPGHT").text();
  return res.json({ html });
}
