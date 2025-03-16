import Image from 'next/image';
import Facebook from '@/assets/images/facebook-share.png';

type Props = {};

const ShareViaFacebook = () => {
  const href = typeof window !== 'undefined' ? window.location.href : '';
  const fbLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    href,
  )}`;

  return (
    <a
      href={fbLink}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => {
        e.stopPropagation();
        window.open(fbLink, '_blank', 'width=600,height=750');
      }}
      style={{ display: 'inline-flex' }}
    >
      <Image height={24} width={24} alt="Facebook" src={Facebook} />
    </a>
  );
};

export default ShareViaFacebook;
