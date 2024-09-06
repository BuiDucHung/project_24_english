import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import styles from './style.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import Image from 'next/image';
import storyData from '../../../mock_api/storyData.json';

import { Navigation } from 'swiper/modules';

const Story: React.FC = () => {

  return (
    <div className={styles.story}>

      <Swiper
        slidesPerView={9}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        modules={[Navigation]}
        keyboard={{ enabled: false }}
        breakpoints={{
          375: { slidesPerView: 4, slidesPerGroup: 4 },
          414: { slidesPerView: 3, slidesPerGroup: 3 },
          768: { slidesPerView: 5, slidesPerGroup: 5 },
          1024: { slidesPerView: 5, slidesPerGroup: 5 },
          1600: { slidesPerView: 9, slidesPerGroup: 9 },
        }}
        scrollbar={{ draggable: true }} // Enable scrollbar
        navigation={true}
        pagination={{ clickable: true, enabled: false }}
        spaceBetween={15}
        className="mySwiper story_slice"
      >
        <SwiperSlide>
          <Link href={'/'}>
            <a style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={`${styles.story_item} ${styles.create}`}>
                <div className={styles.content} style={{ display: 'flex', justifyContent: 'center' }}>
                  <span>
                    <Image src={'/storyImage/story-default.png'} width={112} height={150} alt='image_story' />
                  </span>
                </div>
                <div className={styles.add}>
                  <AddIcon style={{ color: '#fff', fontSize: 14 }} />
                </div>
                <div className={styles.text}>Tạo tin</div>
              </div>
            </a>
          </Link>
        </SwiperSlide>
        {storyData.story.map((item, i) => (
          <SwiperSlide key={i}>
            <Link href={'/'}>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={`${styles.story_item} ${styles.create}`}>
                  <div className={styles.story_item__overlay}>
                    <Image property='true' src={item.image || ''}
                      objectFit='cover' width={112} height={150} alt='image_story'
                    />
                  </div>
                  <div className={styles.avatar}>
                    <Image property='true' src={item.avatar}
                      objectFit='cover' width={20} height={20} alt='image_story'
                    />
                  </div>
                  <div className={styles.name}>{item.lastName}</div>
                  <div className={styles.bottom}></div>
                </div>
              </a>
            </Link>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Link href={'/'}>
            <a style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={`${styles.discovery}`}>
                <div className={styles.discovery_arrow}>
                  <ArrowForwardIcon style={{ fontSize: 14 }} />
                </div>
                <div className={styles.text}>Khám phá thêm</div>
              </div>
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Story