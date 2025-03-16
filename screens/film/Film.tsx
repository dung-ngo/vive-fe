import Image from 'next/image';
import InfoSectionTitle from './components/InfoSectionTitle';
import { TextWithBanner, TextWithNoBanner } from '@/components/Typography';
import PrimaryButton from '@/components/PrimaryButton';
import { GetPhimQuery } from '@/lib/gql/graphql';
import { useRouter } from 'next/router';
import useTranslations from '@/hooks/useTranslations';

const FilmScreen = ({ phim }: { phim: GetPhimQuery }) => {
  const router = useRouter();
  const t = useTranslations();
  const attributes = phim.phim?.data?.attributes;
  const listReasons = attributes?.sectionReasons || [];
  return (
    <div className="vive-film-screen">
      <section className="info-what-is-vegan">
        <div className="container">
          <InfoSectionTitle text={attributes?.titleWhatIsVegan || ''} />
          <p className="text-body">{attributes?.descriptionWhatIsVegan}</p>
        </div>
      </section>
      <section className="info-why-vegan">
        <div className="container">
          <InfoSectionTitle text={attributes?.titleWhyVegan || ''} />
          {listReasons[0] && (
            <article className="protect-animals">
              <div>
                <TextWithBanner text={listReasons[0].title} />
                <div className="tab-left">
                  <p className="text-body">{listReasons[0].description}</p>
                </div>
              </div>
              {listReasons[0].photo?.data && (
                <Image
                  width={320}
                  height={330}
                  alt="Animals"
                  src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${listReasons[0].photo?.data?.attributes?.url}`}
                />
              )}
            </article>
          )}
          {listReasons[1] && (
            <article className="protect-health">
              <div>
                <TextWithBanner
                  text={listReasons[1].title?.split('|')[0] || ''}
                />
                <div className="tab-left">
                  <TextWithNoBanner
                    text={listReasons[1].title?.split('|')[1] || ''}
                  />
                  <div className="flex-content">
                    <p className="text-body">
                      {listReasons[1].description?.split('|')[0] || ''}
                    </p>
                    <p className="text-body">
                      {listReasons[1].description?.split('|')[1] || ''}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          )}
          {listReasons[2] && (
            <article className="protect-environment">
              {listReasons[2].photo?.data && (
                <Image
                  width={320}
                  height={330}
                  alt="Environment"
                  src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${listReasons[2].photo?.data?.attributes?.url}`}
                />
              )}
              <div>
                <TextWithBanner text={listReasons[2].title} />
                <div className="tab-left">
                  <p className="text-body">{listReasons[2].description}</p>
                </div>
              </div>
            </article>
          )}

          {listReasons[3] && (
            <article className="protect-people">
              <div>
                <TextWithBanner text={listReasons[3].title} />
                <div className="tab-left">
                  <p className="text-body">{listReasons[3].description}</p>
                </div>
              </div>
              {listReasons[3].photo?.data && (
                <Image
                  width={320}
                  height={330}
                  alt="Person"
                  src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${listReasons[3].photo?.data?.attributes?.url}`}
                />
              )}
            </article>
          )}

          {listReasons[4] && (
            <article className="reduce-product-from-meet">
              <div>
                <TextWithNoBanner
                  text={listReasons[4].title?.split('|')[0] || ''}
                />
                <div className="tab-left">
                  <TextWithBanner
                    text={listReasons[4].title?.split('|')[1] || ''}
                  />
                  <div className="flex-content">
                    <p className="text-body">
                      {listReasons[4].description?.split('|')[0] || ''}
                    </p>
                    <p className="text-body">
                      {listReasons[4].description?.split('|')[1] || ''}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          )}

          {listReasons[5] && (
            <article className="vegan-diet-not-enough">
              <div>
                <TextWithBanner text={listReasons[5].title} />
                <div className="tab-left">
                  <p className="text-body">{listReasons[5].description}</p>
                </div>
              </div>
              {listReasons[5].photo?.data && (
                <Image
                  width={320}
                  height={330}
                  alt="Animals"
                  src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${listReasons[5].photo?.data?.attributes?.url}`}
                />
              )}
            </article>
          )}

          {listReasons[6] && (
            <article className="start-vegan">
              {listReasons[6].photo?.data && (
                <Image
                  width={320}
                  height={330}
                  alt="Animals"
                  src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${listReasons[6].photo?.data?.attributes?.url}`}
                />
              )}
              <div>
                <h2>{listReasons[6].title}</h2>
                <p className="text-body">{listReasons[6].description}</p>
              </div>
            </article>
          )}
          <div className="btn-list-btn">
            <PrimaryButton
              onClick={() => router.push(attributes?.exploreMoreLink || '#')}
            >
              {t.exploreMoreButton}
            </PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilmScreen;
