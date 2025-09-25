import styles from './WelcomePage.module.css';

export default function WelcomePage() {
  return (
    <section id="top" className={`section`}  >
      <div className="container sectionInner">
        <div className={styles.welcomeImageWrap}>
        <div className={styles.grid}>
          <div>
            <h1 className="h1">DUO <span className={styles.accent}>SWAY</span></h1>
            <div className={styles.textMuted}>яркий дуэт первоклассных вокалистов, создающий неповторимое настроение</div>
          </div>
            <img src="/images/1.jpg" alt="WelcomePagePhoto" className={styles.welcomeImage} />
            {/* <div className="shutterLeft" />
            <div className="shutterRight" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}