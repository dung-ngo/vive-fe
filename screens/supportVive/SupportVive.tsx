import MarkdownContent from '@/components/MarkdownContent';
import PrimaryButton from '@/components/PrimaryButton';
import { GetSupportViveQuery, GetVLabelQuery } from '@/lib/gql/graphql';
import Link from 'next/link';

const SupportViveScreen = ({
  supportVive,
}: {
  supportVive: GetSupportViveQuery;
}) => {
  return (
    <div className="vive-support-screen">
      <section className="support-hero">
        <div className="container">
          <div className="hero-content-container">
            <MarkdownContent
              content={supportVive.supportVive?.data?.attributes?.content || ''}
            />
            <div className="box-button-link">
              <Link
                href={
                  supportVive.supportVive?.data?.attributes?.hyperlink || ''
                }
                target="_blank"
              >
                <PrimaryButton>
                  {supportVive.supportVive?.data?.attributes?.txtButton}
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportViveScreen;
