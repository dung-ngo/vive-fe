import { sanitize } from 'isomorphic-dompurify';
import ReactMarkdown from 'react-markdown';

type Props = {
  content: string;
};

const MarkdownContent = ({ content }: Props) => {
  const cleanContent = sanitize(content, { USE_PROFILES: { html: true } });

  return (
    <div className="markdown">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
