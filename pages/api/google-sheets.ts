import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const RANGE = 'Sheet1!A1:E10';

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    console.log('url ', url);

    const response = await fetch(url);
    const data = await response.json();

    if (!data.values) {
      return res.status(500).json({ message: 'Không tìm thấy dữ liệu' });
    }

    // Convert from 2D array to JSON
    const headers = data.values[0]; // First row as headers
    const jsonData = data.values
      .slice(1)
      .map((row: any) =>
        Object.fromEntries(
          row.map((value: any, index: number) => [headers[index], value]),
        ),
      );

    res.status(200).json(jsonData);
  } catch (error) {
    res.status(500).json({ message: 'Get data error', error });
  }
}
