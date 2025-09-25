import styles from './Contacts.module.css';

export default function Contacts() {
  return (
    <section id="contacts" className={`section ${styles.wrap}`}>
      <div className={styles.content}>
        <div className={styles.title}>КОНТАКТЫ</div>
        <img src="images/image.png" className={styles.photo} alt="..." />
        <a href="mailto:duosway@mail.ru" className={styles.mail}>DUOSWAY@MAIL.RU</a>
        <div className={styles.icons}>
          <a className={styles.icon} href="tel:+79990000000" aria-label="Позвонить">
            <img src="images/phone-circle-fill-svgrepo-com.svg" />
          </a>
          <a className={styles.icon} href="mailto:duosway@mail.ru" aria-label="Написать на почту">
            <img src="images/email-circle-fill-svgrepo-com.svg"/>
          </a>
          <a className={styles.icon} href="https://t.me/duosway" target="_blank" rel="noreferrer" aria-label="Написать в Telegram">
            <img src="images/telegram-svgrepo-com.svg" />
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} DUO SWAY
      </footer>
    </section>
  );
}
