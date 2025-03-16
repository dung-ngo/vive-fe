import useCountDown from '@/hooks/useCountDown';
import useTranslations from '@/hooks/useTranslations';

const CountDown = ({ veganParticipant }: { veganParticipant: string }) => {
  const t = useTranslations();
  const [days, hours, minutes, seconds] = useCountDown();

  return (
    <div className="vive-countdown">
      <ul className="challenge-timer">
        <li>{t.contentEvent.con}</li>
        <li>
          <div className="counter-value">{days}</div>
          <div className="counter-unit">{t.contentEvent.ngay}</div>
        </li>
        <li>
          <div className="counter-value">{hours}</div>
          <div className="counter-unit">{t.contentEvent.gio}</div>
        </li>
        <li>
          <div className="counter-value">{minutes}</div>
          <div className="counter-unit">{t.contentEvent.phut}</div>
        </li>
        <li>
          <div className="counter-value">{seconds}</div>
          <div className="counter-unit">{t.contentEvent.giay}</div>
        </li>
      </ul>
      <p className="participant">{veganParticipant}</p>
    </div>
  );
};

export default CountDown;
