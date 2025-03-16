import Link from 'next/link';
import { TBreadcrumbItem } from '@/typescript/types';

type Props = {
  items: TBreadcrumbItem[];
};

const Breadcrumb = ({ items }: Props) => {
  return (
    <div className="vive-breadcrumb">
      <ul className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className={`breadcrumb-item text-link-2 ${index === items.length - 1 ? 'current' : ''}`}>
            {item.link ? (
              <Link href={item.link} className="text-link-2">
                {item.text}
              </Link>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
