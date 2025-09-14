import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // Retrieve sheetId from the query parameters
    const { sheetId } = req.query;
    if (!sheetId) {
      return res.status(400).json({ message: 'Missing sheetId query param' });
    }

    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const RANGE = 'Sheet1';
    const sheetEndpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${RANGE}?key=${API_KEY}`;

    const response = await fetch(sheetEndpoint);
    const data = await response.json();

    if (!data.values) {
      return res.status(500).json({ message: 'Không tìm thấy dữ liệu' });
    }

    // Convert from 2D array to JSON
    const headers = data.values[0]; // use first row as headers
    const jsonData = data.values
      .slice(1)
      .map((row: any) =>
        Object.fromEntries(
          row.map((value: any, index: number) => [headers[index], value]),
        ),
      );

    return res.status(200).json(jsonData);
  } catch (error) {
    return res.status(500).json({ message: 'Get data error', error });
  }
}
