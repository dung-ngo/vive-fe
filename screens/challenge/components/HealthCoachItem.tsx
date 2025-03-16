import Image from 'next/image';
import { PersonFragment } from '@/lib/gql/graphql';

const HealthCoachItem = ({ personInfo, smallAvatar }: { personInfo: PersonFragment; smallAvatar?: boolean }) => {
  return (
    <article className="challenge-health-coach-item">
      <div className="person-information">
        <Image
          width={smallAvatar ? 100 : 170}
          height={smallAvatar ? 100 : 170}
          alt={personInfo.name}
          src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${personInfo.avatar?.data?.attributes?.url}`}
        />
        <div>
          <h6 className="text-link-2">{personInfo.name?.split('|')[1] || ''}</h6>
          <h3 className="text-sub-title-1">{personInfo.name?.split('|')[0] || ''}</h3>
        </div>
      </div>
      <p className="person-content text-body">{personInfo.introduction}</p>
    </article>
  );
};

export default HealthCoachItem;
