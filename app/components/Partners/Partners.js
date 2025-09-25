import styles from './Partners.module.css';

const STATS = [
  { n: '300+', label: 'Произведений в репертуаре' },
  { n: '50+',  label: 'Площадок' },
  { n: '10+',  label: 'Фестивалей' },
  { n: '20+',  label: 'Городов' },
];

const GROUPS = [
  {
    title: 'Филармонии и площадки',
    items: [
      'Московская филармония',
      'Зал Чайковского',
      'Mariinsky Theatre (кам.)',
      'Strasbourg Opera Studio',
      'Philharmonie de Paris (программа)',
    ],
  },
  {
    title: 'Фестивали',
    items: [
      'Белые ночи',
      'Jazz May',
      'Musica Sacra',
      'Autumn Music Days',
    ],
  },
  {
    title: 'Корпоративные клиенты',
    items: [
      'AirSense',
      'NordicTech',
      'Elara Group',
      'Aurum Capital',
    ],
  },
];

const CASES = [
  {
    title: 'Гала-вечер к открытию сезона',
    place: 'Зал Чайковского',
    year: '2024',
    text: 'Лёгкая классика и мюзиклы для смешанной аудитории. Формат — дуэт + ф-но + саксофон. Программа — 70 минут.',
    quote: 'Спасибо за настроение и очень качественное исполнение!',
    author: 'Программный директор',
  },
  {
    title: 'Закрытый ужин для партнёров',
    place: 'Aurum Capital',
    year: '2025',
    text: 'Classical crossover: от Альбинони до Морриконе. Дуэт + струнный квартет.',
    quote: 'Тонкий подбор репертуара, гости в восторге.',
    author: 'Event-менеджер',
  },
];

export default function Partners() {
  return (
    <section id="partners" className={`section`}>
      <div className="container sectionInner">
        <h1 className={styles.h1}>С кем мы сотрудничали</h1>

        {/* Цифры */}
        {/* <div className={styles.stats}>
          {STATS.map(s => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.num}>{s.n}</div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div> */}

        {/* Группы текстовых бейджей */}
        {GROUPS.map(g => (
          <div key={g.title} className={styles.group}>
            <h2 className={styles.h2}>{g.title}</h2>
            <ul className={styles.badges}>
              {g.items.map((name, i) => (
                <li key={i} className={styles.badge}>{name}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Кейсы */}
        <div className={styles.cases}>
          {CASES.map(c => (
            <article key={c.title} className={styles.case}>
              <header className={styles.caseHead}>
                <h3 className={styles.caseTitle}>{c.title}</h3>
                <div className={styles.caseMeta}>
                  <span>{c.place}</span> · <span>{c.year}</span>
                </div>
              </header>
              <p className={styles.caseText}>{c.text}</p>
              <blockquote className={styles.quote}>
                “{c.quote}”
                <footer className={styles.quoteMeta}>— {c.author}</footer>
              </blockquote>
            </article>
          ))}
        </div>

        <div className={styles.note}>
          Названия организаций приведены в информационных целях. Торговые марки принадлежат их правообладателям.
        </div>
      </div>
    </section>
  );
}
