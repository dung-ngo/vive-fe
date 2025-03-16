import CountDown from '@/components/CountDown';
import PrimaryButton from '@/components/PrimaryButton';
import useTranslations from '@/hooks/useTranslations';
import { direct } from '@/utils/link.util';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HomeCountdown = ({
  veganParticipant,
  titleVeganChallenge,
}: {
  veganParticipant: string;
  titleVeganChallenge: string;
}) => {
  const { locale } = useRouter();
  const t = useTranslations();
  return (
    <>
      <section className="header-content">
        <h1 className="header-content-title text-title-1">
          {titleVeganChallenge}
        </h1>
        <div className="header-content-extra">
          <Link href={direct('challenge-life-vegan', locale)}>
            <PrimaryButton>{t.thamGiaNgay}</PrimaryButton>
          </Link>
        </div>
        <div className="home-countdown">
          <CountDown veganParticipant={veganParticipant} />
        </div>
      </section>
    </>
  );
};

export default HomeCountdown;
