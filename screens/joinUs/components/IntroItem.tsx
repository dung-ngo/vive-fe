import { TextWithBanner, TextWithNoBanner } from '@/components/Typography';

type Props = {
  data: {
    title: string;
    title2: string;
    content: string;
  };
};

const IntroItem = ({ data }: Props) => {
  return (
    <article className="joinUs-intro-item">
      <TextWithBanner text={data.title} />
      <div className="tab-left">
        <TextWithNoBanner text={data.title2} />
        <p className="text-body">{data.content}</p>
      </div>
    </article>
  );
};

export default IntroItem;
