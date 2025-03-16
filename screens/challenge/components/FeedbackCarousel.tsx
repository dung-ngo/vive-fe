import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import Quotes from '@/assets/svgs/quotes.svg';
import { PersonFragment } from '@/lib/gql/graphql';

const FeedbackCarousel = ({
  listReviews,
}: {
  listReviews: PersonFragment[];
}) => {
  const ref = useRef<any>(null);

  return (
    <div className="challenge-feedback">
      <Swiper
        className="vive-swiper"
        ref={ref}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          400: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {listReviews.map((data, index) => (
          <SwiperSlide key={index}>
            <FeedbackItem
              data={data}
              style={{ minHeight: ref.current?.clientHeight ?? 0 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const FeedbackItem = ({
  data,
  style,
}: {
  data: PersonFragment;
  style: CSSProperties;
}) => {
  return (
    <div className="challenge-feedback-item" style={style}>
      <div>
        {data.avatar && (
          <Image
            width={48}
            height={48}
            alt={data.name}
            src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${data.avatar?.data?.attributes?.url}`}
          />
        )}
        <h3 className="text-subtitle-2">{data.name}</h3>
      </div>
      <p className="text-body">{data.introduction}</p>
      <Image
        width={61}
        height={48}
        alt="quotes"
        src={Quotes}
        className="absolute"
      />
    </div>
  );
};

export default FeedbackCarousel;
