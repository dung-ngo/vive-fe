import MarkdownContent from '@/components/MarkdownContent';
import { SinglePageFragment } from '@/lib/gql/graphql';

const PolicyScreen = ({ pageData }: { pageData: SinglePageFragment }) => {
  return (
    <div className="vive-policy-screen">
      <div className="container">
        <h1 className="text-title-1">{pageData.title}</h1>
        <MarkdownContent content={pageData.content || ''} />
      </div>
    </div>
  );
};

export default PolicyScreen;
