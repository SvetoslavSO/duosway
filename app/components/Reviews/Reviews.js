'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Reviews.module.css';

const REVIEWS = [
  {
    id: 1,
    name: 'Евгений Фёдорович',
    title: 'Отличное выступление',
    description: 'Заказывали корпоративный концерт с программой classic — публика осталась в восторге!',
  },
  {
    id: 2,
    name: 'Фёдор Евгеньевич',
    title: 'Нам понравилось',
    description: 'Проводили выступление с оркестром и выбрали этот дуэт, всё прошло отлично.',
  },
  {
    id: 3,
    name: 'Анна Викторовна',
    title: 'Потрясающая энергетика',
    description: 'На юбилее дуэт создал невероятную атмосферу, гости ещё долго обсуждали музыку.',
  },
  {
    id: 4,
    name: 'Дмитрий Сергеевич',
    title: 'Высокий профессионализм',
    description: 'Организация концерта прошла безупречно, артисты отработали программу идеально.',
  },
  {
    id: 5,
    name: 'Мария Александровна',
    title: 'Рекомендую',
    description: 'Звали дуэт на благотворительный вечер, их выступление стало настоящим украшением мероприятия.',
  },
];

export default function Reviews() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="reviews" className="section">
      <div className="container sectionInner">
        <h2 className="h2">Отзывы</h2>

        <div className={styles.viewport}>
          <button ref={prevRef} className={`${styles.ctrl} ${styles.left}`} aria-label="Назад">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button ref={nextRef} className={`${styles.ctrl} ${styles.right}`} aria-label="Вперёд">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <Swiper
            className={styles.swiper}
            modules={[Navigation, Pagination, Mousewheel, A11y]}
            loop
            speed={500}
            centeredSlides
            slidesPerView={1}
            spaceBetween={12}
            pagination={{ clickable: true }}
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
              1024: { slidesPerView: 3, spaceBetween: 28 },  // ноут/десктоп
            }}
          >
            {REVIEWS.map((s) => (
              <SwiperSlide key={s.id} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.header}>
                    <span className={styles.name}>{s.name}</span>
                    <span className={styles.title}>{s.title}</span>
                  </div>
                  <p className={styles.description}>{s.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
