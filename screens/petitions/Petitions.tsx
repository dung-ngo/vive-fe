import Input, { Textarea } from '@/components/Input';
import PrimaryButton from '@/components/PrimaryButton';
import { FormEvent, useState } from 'react';
import ModalConfirm from '@/components/ModalConfirm';
import useTranslations from '@/hooks/useTranslations';
import { subscribeEBook } from '@/apis/subscribe-email';
import { CircularProgress } from '@mui/material';
import YouTube from 'react-youtube';
import ProgressBar from '@/components/ProgressBar';
import Checkbox from '@/components/Checkbox';

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
            <h3 className="text-sub-title-1">Hãy ký đơn thỉnh cầu</h3>
            <p className="text-body">
              <span>15,000 người đã ký đơn thỉnh cầu.</span> Hãy cùng chúng tôi
              đạt được 20,000 người ký
            </p>
            <div className="my-5">
              <ProgressBar />
            </div>
            <div className="mb-5">
              <div className="my-3">
                <span className="font-bold">Angela Phương Trinh</span> đã ký tên
              </div>
              <div className="my-3">
                <span className="font-bold">Đỗ Mai</span> đã ký tên
              </div>
            </div>
            <form onSubmit={(e) => onSubmit(e)}>
              <Input
                label="Tên"
                errorMessage="Please enter your name!"
                required
                type="name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Email"
                errorMessage="Please enter your email!"
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Quốc gia"
                errorMessage="Please enter your country!"
                required
                type="country"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Textarea
                label="Lý do ký tên"
                errorMessage="Please enter your reason!"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Checkbox
                label="Nhận email mỗi tháng từ Vive"
                isChecked={false}
                setChecked={false}
              />
              <PrimaryButton type="submit">
                {isLoading ? <CircularProgress size={20} /> : 'Ký tên'}
              </PrimaryButton>
              <div className="mt-5 text-xs">
                By signing up here and giving us your contact details, you're
                acknowledging that you've read and you agree to our privacy
                policy.
              </div>
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
