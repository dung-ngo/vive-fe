import { FormEvent, memo, useRef, useState } from 'react';
import Tick from '../../../assets/svgs/circle-tick.svg';
import Image from 'next/image';
import PrimaryButton from '@/components/PrimaryButton';
import CountDown from '@/components/CountDown';
import Input from '@/components/Input';
import {
  subscribeChallenge,
  subscribeListSubscribers,
} from '@/apis/subscribe-email';
import useTranslations from '@/hooks/useTranslations';
import ModalConfirm from '@/components/ModalConfirm';
import { ListTextFragment } from '@/lib/gql/graphql';

const ChallengeRegister = ({
  titleVeganChallenge,
  challengeContent,
  veganParticipant,
}: {
  titleVeganChallenge: string;
  challengeContent: ListTextFragment[];
  veganParticipant: string;
}) => {
  const t = useTranslations();
  const nameRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [openModalConfirm, setOpenModalConfirm] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubscribe(false);
  };
  const submitChallenge = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await subscribeChallenge({ email, name });
      if (subscribe) {
        await subscribeListSubscribers({ email, name });
      }
    } catch (err) {
      console.log('err');
    }
    setOpenModalConfirm(true);
    resetForm();
  };
  return (
    <section className="vive-challenge-register">
      <div className="challenge-content">
        <h2 className="text-title-2">{titleVeganChallenge}</h2>
        <ul className="content-list">
          {challengeContent.map((content) => (
            <li key={content.title}>
              <Image width={22} height={22} alt="" src={Tick as any} />
              <p className="text-body">{content.title}</p>
            </li>
          ))}
        </ul>
        <CountDown veganParticipant={veganParticipant} />
      </div>
      <div className="challenge-form">
        <h4 className="text-subtitle-1">{t.dangKyThamGia}</h4>
        <p className="text-body desc">{t.cungThamGiaNgay}</p>
        <form onSubmit={(e) => submitChallenge(e)}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            label={t.ten}
            errorMessage="Please enter your name!"
            required
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            errorMessage="Please enter your email!"
            type="email"
            required
          />
          {/* <div className="challenge-form-checkbox">
            <Checkbox
              isChecked={subscribe}
              setChecked={setSubscribe}
              label={t.nhanEmail}
            />
          </div> */}
          <PrimaryButton type="submit">{t.thamGiaNgay}</PrimaryButton>
        </form>

        <p className="text-body-xsmall note">{t.khiDangKyTNC}</p>
      </div>
      <ModalConfirm
        openModal={openModalConfirm}
        closeModal={() => {
          setOpenModalConfirm(false);
        }}
        subContent={
          <div>
            <div className="sub-content text-body-small text-neutral-dark mb-16">
              <p className="body-text">{t.kiemTraEmail}</p>
            </div>
            <a
              className="join-group"
              href="https://www.facebook.com/groups/thuthach7ngaythuanchay2024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PrimaryButton>{t.thamGiaNhom}</PrimaryButton>
            </a>
          </div>
        }
      />
    </section>
  );
};

export default memo(ChallengeRegister);
