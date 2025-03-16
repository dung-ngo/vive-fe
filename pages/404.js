import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Custom404() {
  const { locale } = useRouter();
  return (
    <div className="vive-not-found">
      <div className="text-title-2">Trang này không tồn tại.</div>
      <Link href="/" locale={locale}>
        <div className="back-btn text-btn">Quay lại trang chủ</div>
      </Link>
    </div>
  );
}
