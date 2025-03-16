import { TextWithBanner } from '@/components/Typography';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from '@/assets/svgs/arrow-right.svg';
import { useRouter } from 'next/router';
import { DirectKeys, direct } from '@/utils/link.util';
import { PersonFragment } from '@/lib/gql/graphql';

const ConsultantItem = ({ personInfo }: { personInfo: PersonFragment }) => {
  return (
    <article className="challenge-consultant-item">
      <Image
        width={170}
        height={170}
        alt={personInfo.name}
        src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${personInfo.avatar.data?.attributes?.url}`}
      />
      <h3 className="text-sub-title-1">{personInfo.name}</h3>
      <p className="person-content text-link-2">{personInfo.introduction}</p>
    </article>
  );
};

export default ConsultantItem;
