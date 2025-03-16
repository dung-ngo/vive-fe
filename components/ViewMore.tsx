import Image from 'next/image';
import Link from 'next/link';
import Arrow from '@/assets/svgs/arrow-right.svg';
import useTranslations from '@/hooks/useTranslations';

type Props = {
  link: string | null | undefined;
};

const ViewMore = ({ link }: Props) => {
  const t = useTranslations();
  return (
    <Link href={link || '#'}>
      <div className="vive-view-more">
        {t.seeMore} <Image width={24} height={24} alt="" src={Arrow} />
      </div>
    </Link>
  );
};

export default ViewMore;
