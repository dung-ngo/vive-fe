import { TextLink } from '@/components/Typography';
import { direct } from '@/utils/link.util';
import { useRouter } from 'next/router';
import HelperRegisterBg from '@/assets/images/peas.webp';
import { FormEvent, useEffect, useState } from 'react';
import { subscribeListSubscribers } from '@/apis/subscribe-email';
import { GraphQLError } from 'graphql';
import useTranslations from '@/hooks/useTranslations';
import client from '@/lib/apolloClient';
import {
  GetGeneralLayoutDocument,
  GetGeneralLayoutQuery,
  GetGeneralLayoutQueryVariables,
} from '@/lib/gql/graphql';

const HelperSection = () => {
  const { locale } = useRouter();
  const t = useTranslations();
  const [email, setEmail] = useState('');
  const [generalLayout, setGeneralLayout] = useState<GetGeneralLayoutQuery>();
  const subscribeEmail = async (e: FormEvent) => {
    try {
      await subscribeListSubscribers({ email, name: '' });
      alert('Subscribe successfully! Thank you!');
      setEmail('');
    } catch (err) {
      alert((err as GraphQLError).message);
    }
  };

  useEffect(() => {
    const fetchGeneralLayout = async () => {
      let { data, errors } = await client.query<
        GetGeneralLayoutQuery,
        GetGeneralLayoutQueryVariables
      >({
        query: GetGeneralLayoutDocument,
        variables: {
          locale: locale,
        },
      });

      setGeneralLayout(data);

      if (errors) {
        throw new Error(JSON.stringify(errors));
      }
    };
    fetchGeneralLayout();
  }, [locale]);
  const attributes = generalLayout?.generalLayout?.data?.attributes;
  return (
    <section className="vive-helper-section">
      {attributes?.helperBackground.data?.attributes?.url && (
        <article
          className="helper-register"
          style={{
            backgroundImage: `url(${`${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes?.helperBackground.data?.attributes?.url}`})`,
          }}
        >
          <h2 className="text-title-2">{attributes?.helperRegisterTitle}</h2>
          <p className="text-subtitle-2 text-white">
            {attributes?.helperRegisterDescription}
          </p>
          <div className="input-wrapper">
            <input
              placeholder={t.footer.emailThamGia}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="" onClick={(e) => subscribeEmail(e)}>
              {t.footer.thamGia}
            </button>
          </div>
        </article>
      )}

      <article className="helper-contact">
        <h2 className="text-title-2">{attributes?.helperContactTitle}</h2>
        <p className="text-subtitle-2 text-gray">
          {attributes?.helperContactDescription}
        </p>
        <TextLink
          link={direct('contact-us', locale)}
          text={t.footer.lienHeChungToi}
        />
      </article>
    </section>
  );
};

export default HelperSection;
