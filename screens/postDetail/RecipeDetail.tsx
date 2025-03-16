/* eslint-disable @next/next/no-img-element */
import Breadcrumb from '@/components/Breadcrumb';
import MarkdownContent from '@/components/MarkdownContent';
import { TBreadcrumbItem } from '@/typescript/types';
import ShareViaFacebook from './components/ShareViaFacebook';
import { RecipeDetailFragment } from '@/lib/gql/graphql';
import Image from 'next/image';
import Clock from '@/assets/svgs/clock.svg';
import Cooking from '@/assets/svgs/cooking.svg';
import Chief from '@/assets/svgs/chief.svg';
import useTranslations from '@/hooks/useTranslations';

type Props = {
  recipeDetail: RecipeDetailFragment;
  title: string;
};

const CookingPreparePortion = ({
  prepareTime,
  cookingTime,
  portionSize,
}: {
  prepareTime: number;
  cookingTime: number;
  portionSize: string;
}) => {
  const t = useTranslations();
  return (
    <div className="icon-list">
      <div className="time-icon">
        <Image height={24} width={24} alt="Reading time" src={Clock} />
        <div className="text-link-2">
          {t.thoiGianChuanBi}: {prepareTime} {t.minutes}
        </div>
      </div>
      <div className="time-icon">
        <Image height={24} width={24} alt="Reading time" src={Cooking} />
        <div className="text-link-2">
          {t.thoiGianNau}: {cookingTime} {t.minutes}
        </div>
      </div>
      <div className="time-icon">
        <Image height={24} width={24} alt="Portion time" src={Chief} />
        <div className="text-link-2">
          {t.khauPhan} {portionSize} {t.nguoi}
        </div>
      </div>
    </div>
  );
};
const RefInfoAndShare = ({ refInto }: { refInto: string }) => {
  return (
    <div className="author">
      <p className="text-body">{refInto}</p>
      <div className="share text-body">
        Chia sẻ <ShareViaFacebook />
      </div>
    </div>
  );
};

const Share = () => {
  return (
    <div className="author recipe-share">
      <div className="share text-body-small">
        Chia sẻ <ShareViaFacebook />
      </div>
    </div>
  );
};

const RecipeDetailScreen = ({ title, recipeDetail }: Props) => {
  const t = useTranslations();
  const breadcrumb = [{ text: t.gocBep }, { text: t.recipes }, { text: title }];
  if (!recipeDetail) {
    return 'No data';
  }

  return (
    <div className="vive-detail-screen">
      <img
        width="100%"
        height={450}
        alt="thumbnail"
        src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${recipeDetail.banner?.data?.attributes?.url}`}
      />
      <div className="container">
        <Breadcrumb items={breadcrumb} />
        <div className="content-container">
          <h1 className="text-title-1">{title}</h1>
          <Share />
          <CookingPreparePortion
            prepareTime={recipeDetail.prepareTime || 0}
            cookingTime={recipeDetail.cookingTime || 0}
            portionSize={recipeDetail.portionSize || ''}
          />
          <MarkdownContent
            content={
              recipeDetail.content?.replaceAll(
                'https://api.vive.org.vn',
                process.env.NEXT_PUBLIC_EDITOR_UPLOAD_URL ||
                  'https://api.vive.org.vn',
              ) || ''
            }
          />
          <RefInfoAndShare refInto={recipeDetail.referenceInformation || ''} />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailScreen;
