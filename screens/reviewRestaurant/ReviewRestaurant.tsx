import Breadcrumb from '@/components/Breadcrumb';
import { TBreadcrumbItem } from '@/typescript/types';
import ListingTitle from '../../components/ListingTitle';
import Pagination from '@mui/material/Pagination';
import { MetaPostFragment, ReviewCardFragment } from '@/lib/gql/graphql';
import ReviewCard from '@/components/cards/ReviewCard';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  breadcrumb: TBreadcrumbItem[];
  reviews: ReviewCardFragment[];
  pagination: MetaPostFragment;
  title: string;
};

const ReviewRestaurantScreen = ({
  breadcrumb,
  reviews,
  title,
  pagination,
}: Props) => {
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="vive-listing-screen">
      <div className="container">
        <Breadcrumb items={breadcrumb} />
        <section>
          <ListingTitle text={title} />
          <div className="card-list">
            {reviews.map(
              (item, index) => item && <ReviewCard key={index} data={item} />,
            )}
          </div>
          <div className="pagination">
            <Pagination
              page={pagination?.pagination?.page}
              count={pagination?.pagination?.pageCount}
              size="large"
              onChange={(_, page) => router.push(`${path}/?page=${page}`)}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReviewRestaurantScreen;
