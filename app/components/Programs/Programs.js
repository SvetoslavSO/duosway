'use client';
import { useEffect, useState } from 'react';
import styles from './Programs.module.css';

const PROGRAMS_JAZZ = [
  {
    id: 1,
    title: 'Jazz Gospel Blues',
    subtitle: 'мировые джазовые хиты',
    tracks: [
      '- John Kander',
      '- Fabian Andre',
      '- Wilbur McCoy',
      '- Otis Blackwell',
      '- Bob Thiele',
      '- Pablo Beltran Ruiz',
      '',
      'и другие...'
    ],
    tracksBold: [
      'All That Jazz ',
      'Dream a Little Dream Of Me ',
      'Why Don\'t You Do Right ',
      'Fever ',
      'What a Wonderful World ',
      'Sway ',
      'Go Down Moses',
      ''
    ]
  },
  {
    id: 2,
    title: 'Broadway & Hollywood',
    subtitle: 'хиты бродвейских мюзиклов и голливудского кино',
    tracks: [
      '- Кошки',
      '- Призрак Оперы',
      '- Чикаго',
      '- Алладин',
      '- Граф Монте-Кристо',
      '- Ромео и Джульетта',
      '– Эвита',
      'и другие...'
    ],
    tracksBold: [
      'Memory ',
      'All I Ask of You ',
      'All That Jazz ',
      'A Whole New World ',
      'Ария Фернана ',
      'Aimer ',
      'Don’t Cry for Me Argentina ',
      ''
    ]
  },
  {
    id: 3,
    title: 'Classical Crossover',
    subtitle: 'программа, сочетающая в себе элементы классической и эстрадной музыки',
    tracks: [
      '- R. Giazotto',
      '- F. Sartori',
      '- D. Foster',
      '- J. Horner, C. Weil',
      '- J.M. Cano',
      '- G. Panceri, V. Zelli',
      '- F. Mercury, M. Moran',
      'и другие...'
    ],
    tracksBold: [
      'Adagio Albinoni ',
      'Time to say goodbye ',
      'The Prayer ',
      'Remember ',
      'Hijo de la luna ',
      'Vivo per lei ',
      'Barcelona ',
      ''
    ]
  },
  {
    id: 4,
    title: 'Magic World of Disney',
    subtitle: 'песни из мультфильмов легендарной студии',
    tracks: [
      '- Красавица и Чудовище',
      '- Русалочка',
      '- Покахонтас',
      '- Король Лев',
      '- Русалочка',
      '- Алладин',
      '- Рапунцель',
      '- Холодное сердце',
      'и другие...'
    ],
    tracksBold: [
      'Beauty and the Beast ',
      'Under the Sea ',
      'Colors Of the Wind ',
      'Can You Feel the Love Tonight ',
      'Part of Your World ',
      'Friend like me ',
      'I See the Light ',
      'Love is an Open Door ',
      ''
    ]
  },
  {
    id: 5,
    title: 'Оскороносные песни',
    subtitle: 'песни-лауреаты со времен создания кинопремии и до наших дней',
    tracks: [
      '- Волшебник страны Оз',
      '- Человек, кот. слишком много знал',
      '- Завтрак у Тиффани',
      '- Афера Томаса Крауна',
      '- Б. Кэссиди и С. Кид',
      '- Танец-вспышка',
      '- Грязные танцы',
      'и другие...'
    ],
    tracksBold: [
      'Over the Rainbow ',
      'Que Sera, Sera ',
      'Moon River ',
      'The Windmills of Your Mind ',
      'Raindrops Keep Fallin\' on My Head ',
      'Flashdance... What a Feeling ',
      'The Time of My Life ',
      ''
    ]
  },
  {
    id: 6,
    title: 'Nominees',
    subtitle: 'песни, номинированные на Оскар, не ставшие победителями, но завоевавшие всемирное признание и любовь публики',
    tracks: [
      '- Бэмби',
      '- Освобожденный',
      '- Шербургские зонтики',
      '- Робин Гуд',
      '- Бесконечная любовь',
      '- Властелин колец: Братство кольца',
      '- Полярный экспресс',
      'и другие...'
    ],
    tracksBold: [
      'Love Is A Song ',
      'Unchained Melody ',
      'I Will Wait For You ',
      'Everything I do ',
      'Endless Love ',
      'May it be ',
      'Believe ',
      ''
    ]
  },
  {
    id: 7,
    title: 'О любви без границ',
    subtitle: 'культовые песни о любви от авторов из разных, неповторяющихся стран',
    tracks: [
      '- Elton John',
      '- Leo Leandros',
      '- Carlos Eleta Almarán',
      '- Al Bano & Romina Power',
      '- Rolf Løvland ',
      '- A. Hammond',
      '- Bryan Adams',
      'и другие...'
    ],
    tracksBold: [
      'I Need You To Turn To ',
      'Goodbye, My Love, Goodbye ',
      'Historia de un amor ',
      'Felicita ',
      'Sleepsong ',
      'When You Tell Me That You Love Me ',
      'Heaven ',
      ''
    ]
  },
  {
    id: 8,
    title: 'Хиты советской эпохи',
    subtitle: 'любимые песни советской эстрады',
    tracks: [
      '- А. Зацепин',
      '- М. Дунаевский',
      '- Г. Гладков',
      '- С. Намин',
      '- М. Магомаев',
      '- Е. Птичкин',
      '- В. Баснер',
      'и другие...'
    ],
    tracksBold: [
      'Звенит январская вьюга ',
      'Ах, этот вечер ',
      'Луч солнца золотого ',
      'Мы желаем счастья вам ',
      'О море, море ',
      'Эхо любви ',
      'Белой акации гроздья душистые ',
      ''
    ]
  }
];

const PROGRAMS_CLASSIC = [
  {
    id: 1,
    title: 'Viva Vivaldi',
    subtitle: 'лучшие вокальные и инструментальные сочинения великого венецианского композитора',
    tracks: [
      '- Времена года',
      '- Stabat Mater, RV 621',
      '- La Gloria e Imeneo, RV 687',
      '- Magnificat, RV 608',
      '- Nisi Dominus, RV 608',
      '- Beatus Vir, RV 579',
      '- Salve Regina, RV 616',
      'и другие...'
    ],
    tracksBold: [
      'Allegro ',
      'Stabat Mater dolorosa ',
      'In braccio de contenti ',
      'Esurientes ',
      'Cum Dederit ',
      'Gloria et divitiae ',
      'Eja ergo ',
      ''
    ]
  },
  {
    id: 2,
    title: 'Оперные хиты',
    subtitle: 'самые знаменитые оперные арии и дуэты',
    tracks: [
      '- «Carmen», G. Bizet ',
      '- «Gianni Schicchi» G. Puccini',
      '- «Carmen», G. Bizet',
      '- «I Capuletti a I Montecchi»V. Bellini',
      '- «Il Barbiere di Siviglia», G. Rossini',
      '- «Don Giovanni», W.A. Mozart',
      '- «Снегурочка», Н.А. Римский-Корсаков',
      'и другие...'
    ],
    tracksBold: [
      'Habanera ',
      'O mio babbino caro ',
      'Chanson de Toreador ',
      'Cavatina di Romeo ',
      'Cavatina di Figaro ',
      'La ci darem la mano ',
      'Третья песня Леля ',
      ''
    ]
  },
  {
    id: 3,
    title: 'Секретное Барокко',
    subtitle: 'редкие шедевры эпохи Барокко',
    tracks: [
      '- «Fandango», J. de Nebra',
      '- «Giulio Cesare in Egitto», A. Sartorio',
      '- «Sant’ Elena al Calvario», L. Leo ',
      '- «Semiramide», A.L. Vivaldi',
      '- «Niobe, Regina di Tebe», A. Steffani',
      '- «Ifigenia in Aulide», G. Porta',
      '– G.Händel',
      'и другие...'
    ],
    tracksBold: [
      'Tempestad grande, amigo ',
      'Aria di Cleopatra ',
      'Al fulgor di questa face ',
      'E prigionier e re ',
      'Tabbraccio, mia Diva ',
      'Madre diletta, abbracciami ',
      'The day that gave great Anna birth ',
      ''
    ]
  },
  {
    id: 4,
    title: 'Русские романсы',
    subtitle: 'классические романсы русских композиторов',
    tracks: [
      '- П.И. Чайковский',
      '- Н.А. Римский-Корсаков',
      '- Г.В. Свиридов',
      '- П.И. Чайковский',
      '- К.В. Молчанов',
      '- С.В. Рахманинов',
      '- Г.В. Свиридов',
      'и другие...'
    ],
    tracksBold: [
      'Серенада Дон Жуана ',
      'Редеет облаков летучая гряда ',
      'Богоматерь в городе ',
      'Ночи безумные ',
      'Край ты мой заброшенный ',
      'О, не грусти по мне ',
      'Березка ',
      ''
    ]
  },
];

export default function Programs() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (open) root.classList.add('modal-open');
    else root.classList.remove('modal-open');
    return () => root.classList.remove('modal-open');
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const current =
    open?.cat === 'jazz'
      ? PROGRAMS_JAZZ.find(p => p.id === open.id)
      : open?.cat === 'classic'
        ? PROGRAMS_CLASSIC.find(p => p.id === open.id)
        : null;

  return (
    <section id="programs" className="section">
      <div className="container sectionInner">

        <span className={styles.title}>
          в репертуаре <b>DUO <span className={styles.accent}>SWAY</span></b> более трехсот музыкальных композиций
        </span>

        {/* Эстрадно-джазовые */}
        <b className={styles.title}>Эстрадно-джазовые программы</b>
        <div className={styles.wrap}>
          {PROGRAMS_JAZZ.map(p => (
            <div
              key={`j-${p.id}`}
              className={styles.btn}
              onClick={() => setOpen({ cat: 'jazz', id: p.id })}
              aria-haspopup="dialog"
              aria-controls={`program-jazz-${p.id}`}
            >
              {p.title}
            </div>
          ))}
        </div>

        <b className={styles.title}>Классические программы</b>
        <div className={styles.wrap}>
          {PROGRAMS_CLASSIC.map(p => (
            <div
              key={`c-${p.id}`}
              className={styles.btn}
              onClick={() => setOpen({ cat: 'classic', id: p.id })}
              aria-haspopup="dialog"
              aria-controls={`program-classic-${p.id}`}
            >
              {p.title}
            </div>
          ))}
        </div>

        {current && (
          <div
            className={styles.backdrop}
            role="dialog"
            aria-modal="true"
            id={`program-${open.cat}-${open.id}`}
            onClick={() => setOpen(null)}
          >
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <div className={styles.badge}>
                  {open.cat === 'jazz' ? 'Эстрадно-джазовая программа' : 'Классическая программа'}
                </div>
                <h3 className={styles.modalTitle}>{current.title}</h3>
                {current.subtitle && <p className={styles.modalSub}>{current.subtitle}</p>}
              </div>

              <ul className={styles.tracklist}>
                {current.tracks.map((t, i) => (
                  <li key={i}>
                    <strong>{current.tracksBold[i]}</strong>
                    {t}
                  </li>
                ))}
              </ul>

              <div className={styles.modalActions}>
                <button className={styles.closeBtn} onClick={() => setOpen(null)}>Закрыть</button>
              </div>
            </div>
          </div>
        )}

        <b className={styles.title}>Программа заказчика</b>
        <div className={styles.wrap} style={{justifyContent: 'center'}}>
          <a href='#contacts' className={styles.soloBtn + ` solo`}>
            Подготовим программу по Вашему запросу
          </a>
        </div>
      </div>
    </section>
  );
}
