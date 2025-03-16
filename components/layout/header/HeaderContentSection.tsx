type Props = {
  title: string;
  subTitle: string | undefined;
};

const HeaderContentSection = ({ title, subTitle }: Props) => {
  return (
    <section className="header-content">
      <h1 className="header-content-title text-title-1">{title}</h1>
      {subTitle ? <p className="header-content-desc text-subtitle-1">{subTitle}</p> : null}
    </section>
  );
};

export default HeaderContentSection;
