import Image from 'next/image';
import { ComponentProps } from 'react';

type ImageProps = ComponentProps<typeof Image>;

const CircleImage = ({ alt, ...props }: ImageProps) => {
  return (
    <div className="vive-circle-image">
      <Image alt={alt ?? 'Hình minh hoạ'} {...props} />
    </div>
  );
};

export default CircleImage;
