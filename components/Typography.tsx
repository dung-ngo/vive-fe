import Image from 'next/image';
import Link from 'next/link';

import Arrow from '@/assets/svgs/arrow-right.svg';

export const TextWithBanner = ({ text, textClassName = 'text-title-2' }: { text: string; textClassName?: string }) => {
  return <div className={`vive-text-banner ${textClassName}`}>{text}</div>;
};

export const TextWithNoBanner = ({
  text,
  textClassName = 'text-title-2',
}: {
  text: string;
  textClassName?: string;
}) => {
  return <div className={`vive-text-no-banner ${textClassName}`}>{text}</div>;
};

export const TextLink = ({
  text,
  link,
  textClassName = 'text-btn',
}: {
  text: string;
  link: string;
  textClassName?: string;
}) => {
  return (
    <Link href={link}>
      <div className="vive-text-link">
        <div className={textClassName}>{text}</div>
        <Image width={24} height={24} alt="" src={Arrow} />
      </div>
    </Link>
  );
};
