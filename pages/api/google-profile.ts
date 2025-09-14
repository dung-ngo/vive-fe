// import { getSession } from 'next-auth/react';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   const session = await getSession({ req });

//   if (!session || !session.user) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   res.status(200).json({
//     name: session.user.name,
//     email: session.user.email,
//     image: session.user.image,
//   });
// }
