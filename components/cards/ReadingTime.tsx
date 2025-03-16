import Clock from '@/assets/svgs/clock.svg';
import Image from 'next/image';

type Props = {
  time: string;
};

const CardReadingTime = () => {
  return (
    <div className="vive-card-readingTime">
      <Image width={24} height={24} alt="reading time" src={Clock} />
      <span></span>
    </div>
  );
};

export default CardReadingTime;
