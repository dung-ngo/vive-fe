import type { NextApiRequest, NextApiResponse } from 'next';
import Error from 'next/error';

type ResponseData = {
  message?: string;
  revalidated?: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | string>,
) {
  if (req.query.secret !== process.env.SECRET_REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  const path = req.query.path;
  console.log('path', path);
  try {
    await res.revalidate(`${path}`);

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
