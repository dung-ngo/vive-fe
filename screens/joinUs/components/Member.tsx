import { PersonFragment } from '@/lib/gql/graphql';
import Image from 'next/image';

const Member = ({ personInfo }: { personInfo: PersonFragment }) => {
  return (
    <article className="joinUs-member">
      <Image
        width={70}
        height={70}
        alt={personInfo.name}
        src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${personInfo.avatar?.data?.attributes?.url}` || ''}
      />
      <p className="text-link-2">{personInfo.name.split('|')[1]?.trim()}</p>
      <h3 className="text-subtitle-1">{personInfo.name.split('|')[0]?.trim()}</h3>
      <p className="text-body">{personInfo.introduction}</p>
    </article>
  );
};

export default Member;
