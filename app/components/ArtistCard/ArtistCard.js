import { useState } from 'react';
import styles from './ArtistCard.module.css';

export default function ArtistCard({
  index,
  photo,
  name,
  subtitles,
  subtitlesMini,
  quote,
  extra,
  onMore
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`${styles.card}`}>
      <div className={styles.photoWrapper}>
        <img src={photo} alt={name} className={styles.photo} />
      </div>
      <div className={`${styles.info} ${styles.alignLeft}`}>
        <h3 className={styles.name}>{name}</h3>
        {subtitles.length > 0 && (
          <ul className={styles.subtitles}>
            {subtitles.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        )}
        {subtitlesMini.length > 0 && (
          <ul className={styles.subtitlesMini}>
            {subtitlesMini.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        )}
        {quote && <p className={styles.quote}>«{quote}»</p>}
        {expanded && extra && <p className={styles.extra}>{extra}</p>}
        {extra && (
          <button
            className={styles.readMore}
            onClick={onMore}
          >
            {expanded ? 'Свернуть' : 'Читать ещё'}
          </button>
        )}
      </div>
    </article>
  );
}