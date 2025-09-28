'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Photos.module.css';

const SLIDES = [
  { id: 1, title: '', image: './images/2.jpg' },
  { id: 2, title: '', image: './images/3.jpg' },
  { id: 3, title: '', image: './images/4.jpg' },
  { id: 4, title: '', image: './images/5.jpg' },
  { id: 5, title: '', image: './images/6.jpg' },
  { id: 6, title: '«В роли Иоланты. В роли Водемона – Петр Налич (Опера П.И. Чайковского «Иоланта», Московский Оперный Дом)', image: './images/7.png' },
  { id: 7, title: '', image: './images/8.png' },
  { id: 8, title: '', image: './images/9.jpg' },
  { id: 9, title: '', image: './images/10.png' },
  { id: 10, title: '', image: './images/11.jpg' },
  { id: 11, title: '«В роли Квазимодо (Мюзикл «Notre Dam de Paris», Крокус Сити Холл)', image: './images/12.jpg' },
  { id: 12, title: '', image: './images/13.jpg'},
  { id: 13, title: '', image: './images/14.jpg'},
];

export default function PhotosSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="photo" className="section">
      <div className="container sectionInner">
        <h2 className="h2">Фото</h2>

        <div className={styles.viewport}>
          <div ref={prevRef} className={`${styles.ctrl} ${styles.left}`} aria-label="Назад">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div ref={nextRef} className={`${styles.ctrl} ${styles.right}`} aria-label="Вперёд">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <Swiper
            className={styles.swiper}
            modules={[Navigation, Pagination, Mousewheel, A11y]}
            loop
            loopAdditionalSlides={2}
            speed={500}
            centeredSlides
            slidesPerView={1}
            spaceBetween={12}
            pagination={{ clickable: true, dynamicBullets: false, type: 'bullets'  }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 20 },   // планшет
              1024: { slidesPerView: 3, spaceBetween: 28 },   // ноут/десктоп
            }}
          >
            {SLIDES.map((s) => (
              <SwiperSlide key={s.id} className={styles.slide}>
                <div className={styles.card}>
                  <img src={s.image} alt={s.title} />
                </div>
                {s.title && <div className={styles.caption}>{s.title}</div>}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
