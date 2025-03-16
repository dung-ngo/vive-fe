import { useRouter } from 'next/router';
import en from '@/dictionaries/en.json';
import vi from '@/dictionaries/vi.json';

const useTranslations = () => {
  const { locale } = useRouter();
  const trans = locale === 'vi' ? vi : en;
  return trans;
};

export default useTranslations;
