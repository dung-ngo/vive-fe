type Props = {
  className: string;
};

const WaveBackground = ({ className }: Props) => {
  return (
    <div className={`vive-wave-bg ${className}`}>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path
          d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
          stroke="none"
          fill="#fff"
        ></path>
      </svg>
    </div>
  );
};

export default WaveBackground;
