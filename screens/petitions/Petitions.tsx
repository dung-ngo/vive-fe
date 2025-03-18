import Input from '@/components/Input';
import PrimaryButton from '@/components/PrimaryButton';
import { FormEvent, useState } from 'react';
import ModalConfirm from '@/components/ModalConfirm';
import useTranslations from '@/hooks/useTranslations';
import { subscribeEBook } from '@/apis/subscribe-email';
import { CircularProgress } from '@mui/material';
import YouTube from 'react-youtube';

const PetitionScreen = () => {
  const videoId = 'bS9eXS6VucU'; // dummy for now
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations();
  const resetForm = () => {
    setName('');
    setEmail('');
  };
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await subscribeEBook({ email, name });
    } catch (err) {
      console.log(err);
    }
    downloadBook();
    resetForm();
    setOpenModalConfirm(true);
    setIsLoading(false);
  };

  const downloadBook = () => {
    const a = document.createElement('a');
    a.href = '/Vive-Booklet-v2.pdf';
    a.download = 'Vive-Booklet.pdf';
    a.click();
  };

  return (
    <div className="vive-petition-screen">
      <div className="container">
        <section className="petition-form-container">
          <div className="petition-content-container">
            <h1>Help Stop Vietnam's Cruel Pig Slaughter Festival</h1>
            <div className="petition-content-1">
              <p style={{ marginBottom: '2rem' }}>
                The Nem Thuong Pig Slaughter Festival in Vietnam is one of the
                worst "festivals" in the world. For the event—which takes place
                every Lunar New Year—pigs are tied up and paraded through the
                streets of Nem Thuong village surrounded by noisy crowds and
                frightening, loud music. Their throats are then slit while
                they're still fully conscious so that villagers can dip money in
                their blood for "good luck."
              </p>
              <p>
                Pigs are social, playful, protective animals who bond with each
                other, make nests, and relax in the sun. They are known to
                dream, recognize their own names, learn "tricks" like sitting
                for a treat, lead social lives of a complexity previously
                observed only in primates, and have been seen showing empathy
                for other pigs who are unhappy or distressed. All pigs deserve
                long, happy lives, free from suffering and exploitation.
              </p>
            </div>
            <div className="petition-video">
              <YouTube className="youtube-video" videoId={videoId} />
            </div>
            <div className="petition-content-2">
              <h2>Take Action for Pigs</h2>
              <p>
                Torturing and killing animals have never brought anything good
                into the world, and culture and tradition are no excuse for
                cruelty. Please take a moment to send a message to officials in
                Vietnam and ask that they put an end to this cruel festival
                immediately.
              </p>
            </div>
          </div>
          <div className="petition-form">
            <h3 className="text-sub-title-1">{t.taiSachTitle}</h3>
            <p className="text-body">{t.dienThongTin}</p>
            <form onSubmit={(e) => onSubmit(e)}>
              <Input
                label="Email"
                errorMessage="Please enter your email!"
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <PrimaryButton type="submit">
                {isLoading ? <CircularProgress size={20} /> : t.taiSachTitle}
              </PrimaryButton>
            </form>
          </div>
        </section>
      </div>
      <ModalConfirm
        openModal={openModalConfirm}
        closeModal={() => {
          setOpenModalConfirm(false);
        }}
        subContent={
          <div className="sub-content text-body-small text-neutral-dark mb-16">
            <p className="body-text">{t.taiSach}</p>
          </div>
        }
      />
    </div>
  );
};

export default PetitionScreen;
