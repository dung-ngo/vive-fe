type Props = {
  content: string;
  small?: boolean;
};

const Hashtag = ({ content, small }: Props) => {
  return <div className={`vive-hashtag truncate-1 ${small ? 'text-link-2' : 'text-link-1'}`}>#{content}</div>;
};

export default Hashtag;
