import Image from 'next/image';
import Calendar from '@/assets/svgs/calendar.svg';
import Link from 'next/link';
import { ActivityFragment } from '@/lib/gql/graphql';
import moment from 'moment';

type Props = {
  data: {
    imgSrc: string;
    time: string;
    title: string;
    externalLink: string;
  };
};

const EventCard = ({ data }: { data: ActivityFragment }) => {
  return (
    <Link href={data.hyperlink || '#'}>
      <article className="about-event-card">
        <Image
          width={420}
          height={270}
          alt={data.title || ''}
          src={
            `${process.env.NEXT_PUBLIC_UPLOAD_URL}${data.thumbnail.data?.attributes?.url}` ||
            ''
          }
          className="event-img"
          objectFit="cover"
        />
        <div className="event-content">
          <div className="timer">
            <Image
              width={24}
              height={24}
              alt="Time"
              src={Calendar}
              objectFit="cover"
            />
            <span className="text-link-2">
              {moment(data.date).format('llll')}
            </span>
          </div>
          <h3 className="text-subtitle-1 text-black">{data.title}</h3>
        </div>
      </article>
    </Link>
  );
};

export default EventCard;
