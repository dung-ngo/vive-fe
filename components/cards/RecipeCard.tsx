import Link from 'next/link';
import Hashtag from './Hashtag';
import Image from 'next/image';
import Clock from '@/assets/svgs/clock.svg';
import Cooking from '@/assets/svgs/cooking.svg';
import { RecipeCardFragment, ReviewCardFragment } from '@/lib/gql/graphql';
import { getHyperLink } from '@/utils/link.util';
import { useRouter } from 'next/router';
import useTranslations from '@/hooks/useTranslations';

const RecipeCard = ({ recipe }: { recipe: RecipeCardFragment }) => {
  const { locale } = useRouter();
  const t = useTranslations();
  return (
    <Link href={getHyperLink(recipe.slug, 'recipe', locale)}>
      <div className="vive-listing-card">
        <div
          className="thumbnail"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_UPLOAD_URL}${recipe.thumbnail?.data?.attributes?.url})`,
          }}
        ></div>
        <div className="content">
          <h3 className="text-subtitle-1">{recipe.title}</h3>
          <div className="icon-list">
            <div className="time-icon">
              <Image height={24} width={24} alt="Reading time" src={Clock} />
              <div className="text-link-2">
                {recipe.prepareTime} {t.minutes}
              </div>
            </div>
            <div className="time-icon">
              <Image height={24} width={24} alt="Reading time" src={Cooking} />
              <div className="text-link-2">
                {recipe.cookingTime} {t.minutes}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
