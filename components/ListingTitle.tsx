const ListingTitle = ({ text }: { text: string }) => {
  return (
    <div className="vive-listing-title">
      <h2 className="text-title-2">{text}</h2>
      <div className="line" />
    </div>
  );
};

export default ListingTitle;
