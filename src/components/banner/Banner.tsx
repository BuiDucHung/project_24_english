import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import BannerData from '../../../mock_api/sliceData.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const Banner: React.FC = () => {

  return (
    <div>
      <Swiper pagination={{
        clickable: true,
      }} modules={[Pagination]}
        navigation={{
          nextEl: '.next',
        }}
        className="mySwiper">
        {BannerData.banner.map((item) => (
          <SwiperSlide key={item.id}>
            <Image property={'true'} src={item.banner} style={{ width: '100%', borderRadius: 20 }}
              objectFit='cover' width={1400} height={438} alt='image_story'
              sizes='100vw'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner