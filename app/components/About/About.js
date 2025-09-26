'use client';
import { useEffect, useState } from 'react';
import styles from './About.module.css';
import ArtistCard from '../ArtistCard/ArtistCard';

const artists = [
  {
    index: 1,
    photo: './images/2.jpg',
    extraPhoto: './images/4.jpg',
    name: 'Яна Федорова',
    subtitles: [
      'Певица, актриса музыкального театра',
      'Лауреат всероссийских и международных вокальных конкурсов'
    ],
    subtitlesMini: [
      'Певица, актриса музыкального театра',
    ],
    quote: 'Через свой голос я хочу дарить людям любовь',
    extra: 'Тут можно разместить развёрнутую биографию.',
    firstParagraph: 'Родилась в Москве. С раннего возраста выступала на сцене и гастролировала в странах Европы. Окончила Государственный музыкальный колледж и Российскую академию музыки имени Гнесиных по специальности «вокальное искусство» под руководством Народной артистки Российской Федерации Ивановой Л. Г.',
    secondParagraph: 'По личному приглашению ректора Каннской консерватории Алана Павара с сольной программой принимала участие в закрытии XIX Фестиваля Российского искусства в Каннах, Франция. Работала с Карлой Фраччи, Грегорио Нарди, Владимиром Агронским.',
    thirdParagraph:'Выступала с сольными концертами, а также в составах коллективов на сценах Большого зала Московской консерватории, Московского концертного зала «Зарядье», Московского международного Дома музыки, концертного зала имени П. И. Чайковского, Градский Холла, Большого театра России и др.'
  },
  {
    index: 2,
    photo: './images/3.jpg',
    extraPhoto: './images/11.jpg',
    name: 'Владислав Шавров',
    subtitles: [
      'Певец, актёр музыкального театра',
      'Лауреат всероссийских и международных вокальных конкурсов'
    ],
    subtitlesMini: [
      'Певец, актёр музыкального театра',
    ],
    quote: 'Для каждого произведения я стараюсь создать свой особенный образ',
    extra: 'Развёрнутая биография и достижения артиста.',
    firstParagraph: 'Родился в городе Новозыбкове Брянской области. С самого детства увлекался пением, мечтая стать музыкантом и выступать на сцене. Окончил Государственный музыкальный колледж имени Гнесиных и Академию хорового искусства им. В. С. Попова по специальностям «оперный певец» и «артист музыкального театра» под руководством Народной артистки Российской Федерации Ивановой Л.Г. и профессора, доктора искусствоведения Чаплина  В. Л.',
    secondParagraph: 'Работал с дирижёрами с мировым именем такими, как В. И. Федосеев, М. В. Плетнев, Ф. П. Коробов, А. В. Сладковский, К. И. Карабиц, А. Дзедда',
    thirdParagraph:'Выступал с сольными концертами, а также в составах коллективов на сценах Большого зала Московской консерватории, Московского концертного зала «Зарядье», Московского международного Дома музыки, концертного зала имени П. И. Чайковского, концертного зала Кремлёвского Дворца, Крокус Сити Холла, Московского театра «Новая Опера» имени Е. В. Колобова, Московского академического Музыкального театра имени К. С. Станиславского и Вл. И. Немировича-Данченко, Большого театра России и др.'
  },
];

export default function About() {
  const [openArtist, setOpenArtist] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (openArtist) root.classList.add('modal-open');
    else root.classList.remove('modal-open');
    return () => root.classList.remove('modal-open');
  }, [openArtist]);

  const handleMore = (a) => {
    setOpenArtist({
      index: a.index,
      name: a.name,
      extra: a.extra,
      extraPhoto: a.extraPhoto || a.photo,
      firstParagraph: a.firstParagraph,
      secondParagraph: a.secondParagraph,
      thirdParagraph: a.thirdParagraph
    });
  };

  return (
    <section id="about" className="section">
      <div className="container sectionInner">
        <h2 className="h2">О нас</h2>

        {artists.map((artist) => (
          <ArtistCard key={artist.index} {...artist} onMore={() => handleMore(artist)} />
        ))}

        <div className={styles.text}>
          Выступления дуэта проходят в сопровождении профессиональных музыкантов: фортепьяно, саксофон, ударные, контрабас, виолончель, скрипка, флейта (состав инструментов зависит от выбранной программы и пожеланий заказчика)
        </div>
      </div>

      {openArtist && (
        <div className={styles.backdrop} role="dialog" aria-modal="true" onClick={() => setOpenArtist(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{openArtist.name}</h3>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalBlock}>
                <img className={styles.modalPhoto} src={openArtist.extraPhoto} alt={openArtist.name} />
                <div className={styles.modalText}>{openArtist.firstParagraph}</div>
              </div>
              <div className={styles.modalText}>{openArtist.secondParagraph}</div>
              <div className={styles.modalText}>{openArtist.thirdParagraph}</div>
            </div>
            <div className={styles.modalActions}>
              <button className={styles.closeBtn} onClick={() => setOpenArtist(null)}>Закрыть</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
