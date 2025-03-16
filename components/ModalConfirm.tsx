import { Box, Modal } from '@mui/material';
import VeganBannerConfirm from '@/assets/images/vegan-confirm-banner.jpg';
import useTranslations from '@/hooks/useTranslations';
import { ReactNode } from 'react';
import Close from '@/assets/svgs/delete.svg';

type Props = {
  subContent: ReactNode;
  closeModal: () => void;
  openModal: boolean;
};

const ModalConfirm = ({ subContent, openModal, closeModal }: Props) => {
  const t = useTranslations();
  return (
    <Modal open={openModal} className="vive-confirm-modal">
      <Box>
        <div className="banner">
          <img src={VeganBannerConfirm.src} alt="" />
          <button className="delete" onClick={closeModal}>
            <img src={Close.src} alt="" />
          </button>
        </div>
        <div className="content">
          <div className="title text-subtitle-2">{t.camOn}</div>
          <div>{subContent}</div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalConfirm;
