import Input, { Textarea } from '@/components/Input';
import PrimaryButton from '@/components/PrimaryButton';
import Link from 'next/link';
import Mail from '@/assets/svgs/mail.svg';
import Facebook from '@/assets/svgs/contact-facebook.svg';
import Image from 'next/image';
import useTranslations from '@/hooks/useTranslations';
import { FormEvent, useState } from 'react';
import ModalConfirm from '@/components/ModalConfirm';
import { subscribeContact } from '@/apis/subscribe-email';
import { CircularProgress } from '@mui/material';
import ModalContact from '@/components/ModalContact';

const ContactUsScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const resetForm = () => {
    setName('');
    setEmail('');
    setAge('');
    setMessage('');
  };
  const submitContact = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await subscribeContact({ email, name, age, message });
    } catch (err) {
      console.log(err);
    }
    resetForm();
    setOpenModalConfirm(true);
    setIsLoading(false);
  };
  const t = useTranslations();
  return (
    <div className="vive-contact-screen">
      <div className="container">
        <h1 className="text-title-1">{t.trangLienHe.tieude}</h1>
        <div className="contact-form-container">
          <form onSubmit={submitContact}>
            <div className="contact-form">
              <Input
                label={t.ten}
                errorMessage="Please enter your name!"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label={t.tuoi}
                errorMessage="Please enter your age!"
                required
                onChange={(e) => setAge(e.target.value)}
              />
              <Input
                label="Email"
                errorMessage="Please enter your email!"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <Textarea
                label={t.tinNhan}
                onChange={(e) => setMessage(e.target.value)}
              />
              <PrimaryButton type="submit">
                {isLoading ? <CircularProgress size={20} /> : 'Submit'}
              </PrimaryButton>
            </div>
          </form>
          <div className="contact-notes">
            <div className="note-item">
              <div className="icon-wrapper">
                <Image width={24} height={24} alt="Mailto" src={Mail} />
              </div>
              <div className="content-wrapper text-subtitle-1">
                {t.lienHeVoi}{' '}
                <Link href="mailto:xinchao@vive.org.vn">
                  xinchao@vive.org.vn
                </Link>
              </div>
            </div>
            <div className="note-item">
              <div className="icon-wrapper">
                <Image width={24} height={24} alt="Mailto" src={Facebook} />
              </div>
              <div className="content-wrapper text-subtitle-1">
                <Link href="https://www.facebook.com/vive.org.vn">
                  facebook.com/vive.org.vn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalContact
        openModal={openModalConfirm}
        closeModal={() => {
          setOpenModalConfirm(false);
        }}
        subContent={
          <div>
            {/* <div className="sub-content text-body-small text-neutral-dark mb-16">
              <p className="body-text">{t.kiemTraEmail}</p>
            </div> */}
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
    </div>
  );
};

export default ContactUsScreen;
