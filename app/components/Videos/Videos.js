import styles from './Videos.module.css';
// import ReactPlayer from 'react-player';

export default function Events() {
  const cards = [
    {
      id: 1,
      src: '/videos/video2.mp4',
      title: 'с программой "Jazz Gospel Blues"',
    },
    {
      id: 2,
      src: '/videos/video1.mp4',
      title: 'и Президентский оркестр РФ',
    }
  ]
  return (
    <section id="video" className={`section`}>
      <div className="container sectionInner">
        <h2 className="h2">Видео</h2>
        <div className={styles.grid}>
          {cards.map(c => (
            <div key={c.id} href="#" className={styles.card}>
              <div className={styles.cardTitle}>
                <span className={styles.logo}>DUO <span>SWAY </span></span>
                <span>{c.title}</span>
              </div>
              <video src={c.src} controls width="100%" preload="metadata" playsInline muted />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}