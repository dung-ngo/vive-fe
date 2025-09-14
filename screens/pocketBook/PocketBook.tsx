import Input from '@/components/Input';
import PrimaryButton from '@/components/PrimaryButton';
import Image from 'next/image';
import PocketBookImage from '@/assets/images/ebook-example.webp';
import CircleTick from '@/assets/svgs/circle-tick-green.svg';
import { TextWithBanner, TextWithNoBanner } from '@/components/Typography';
import { FormEvent, useState } from 'react';
import ModalConfirm from '@/components/ModalConfirm';
import useTranslations from '@/hooks/useTranslations';
import { CircularProgress } from '@mui/material';
import { PocketBook } from '@/lib/gql/graphql';
import { downloadPocketBook } from '@/apis/taisach';

type TProps = { pocketBook: PocketBook };

const PocketBookScreen = (props: TProps) => {
  const backendHost = process.env.NEXT_PUBLIC_UPLOAD_URL;
  const imageLink = props.pocketBook.sectionBookImage?.data?.attributes?.url
    ? backendHost + props.pocketBook.sectionBookImage.data.attributes.url
    : null;
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations();

  const resetForm = () => {
    setEmail('');
  };
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const downloadLink = `${process.env.NEXT_PUBLIC_UPLOAD_URL}${props.pocketBook.book?.data?.attributes?.url}`;
    const fileName = props.pocketBook.book?.data?.attributes?.name || '';
    try {
      await downloadPocketBook({
        link: downloadLink,
        email,
        date: new Date().toISOString(),
      });
      downloadBook(downloadLink, fileName);
      resetForm();
    } catch (err) {
      console.log(err);
    }
    setOpenModalConfirm(true);
    setIsLoading(false);
  };

  const downloadBook = (downloadLink: string, fileName: string) => {
    fetch(downloadLink)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });
  };

  const listContent = [
    `${t.danhSachContent.kienThuc}`,
    `${t.danhSachContent.congThuc}`,
    `${t.danhSachContent.keHoach}`,
    `${t.danhSachContent.nhaHang}`,
    `${t.danhSachContent.meoVat}`,
  ];

  return (
    <div className="vive-book-screen">
      <div className="container">
        <h1 className="text-title-1">{props.pocketBook.sectionBookTitle}</h1>
        <section className="book-form-container">
          <div className="img-container">
            <Image
              width={500}
              height={487}
              alt=""
              src={imageLink || PocketBookImage}
            />
          </div>
          <div className="book-form">
            <h3 className="text-sub-title-1">{t.taiSachTitle}</h3>
            <p className="text-body">{t.dienThongTin}</p>
            <form onSubmit={(e) => onSubmit(e)}>
              <Input
                label="Email"
                errorMessage="Please enter your email!"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <PrimaryButton type="submit">
                {isLoading ? <CircularProgress size={20} /> : t.taiSachTitle}
              </PrimaryButton>
            </form>
          </div>
        </section>
        <section className="book-info">
          <article>
            <TextWithNoBanner text={`${t.nhungGi}`} />
            <TextWithBanner text={`${t.nhanDuoc}`} />
            <p className="text-body tab-left">{t.chiTietNhanDuoc}</p>
          </article>
          <ul className="content-list">
            {listContent.map((content) => (
              <li key={content}>
                <Image width={22} height={22} alt="" src={CircleTick} />
                <p className="text-body">{content}</p>
              </li>
            ))}
          </ul>
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

export default PocketBookScreen;
