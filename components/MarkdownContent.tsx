import ReactMarkdown from 'react-markdown';

type Props = {
  content: string;
};

const MarkdownContent = ({ content }: Props) => {
  return (
    <div className="markdown">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
