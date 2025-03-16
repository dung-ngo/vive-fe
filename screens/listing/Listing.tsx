import Breadcrumb from '@/components/Breadcrumb';
import ListingCard from '@/components/cards/ListingCard';
import { TBreadcrumbItem } from '@/typescript/types';
import ListingTitle from '../../components/ListingTitle';
import Pagination from '@mui/material/Pagination';
import {
  GetListPostsByCategorySlugQuery,
  MetaPostFragment,
  PostCardFragment,
} from '@/lib/gql/graphql';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import useTranslations from '@/hooks/useTranslations';

type Props = {
  breadcrumb: TBreadcrumbItem[];
  posts: {
    data: PostCardFragment[];
    meta: MetaPostFragment;
  };
  title: string;
};

const ListingScreen = ({ breadcrumb, posts, title }: Props) => {
  const listPosts = posts.data;
  const pagination = posts.meta.pagination;
  const router = useRouter();
  const path = usePathname();
  const t = useTranslations();
  return (
    <div className="vive-listing-screen">
      <div className="container">
        <Breadcrumb items={breadcrumb} />
        <section>
          <ListingTitle text={title} />
          <div className="card-list">
            {listPosts.map(
              (item, index) =>
                item && (
                  <ListingCard
                    key={index}
                    data={item}
                    descriptionHidden
                    timeHidden
                  />
                ),
            )}
          </div>
          <div className="pagination">
            <Pagination
              page={pagination?.page}
              count={pagination?.pageCount}
              size="large"
              onChange={(_, page) => router.push(`${path}/?page=${page}`)}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListingScreen;
