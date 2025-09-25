'use client';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

const NAV = [
  { href: '#about', label: 'О нас' },
  // { href: '#partners', label: 'Партнёры' },
  { href: '#video', label: 'Видео' },
  { href: '#photo', label: 'Фото' },
  { href: '#reviews', label: 'Отзывы'},
  { href: '#programs', label: 'Программы' },
  { href: '#contacts', label: 'Контакты' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.classList.add(styles.noScroll);
    else document.body.classList.remove(styles.noScroll);
    return () => document.body.classList.remove(styles.noScroll);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="#top" className={styles.logo}>DUO <span>SWAY</span></a>
        <nav className={styles.navDesktop}>
          {NAV.map(i => (
            <a key={i.href} className={styles.navLink} href={i.href}>{i.label}</a>
          ))}
        </nav>
        <button className={styles.burger} aria-label="Открыть меню" onClick={() => setOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)} />
          <div className={styles.mobileMenu} role="dialog" aria-modal="true">
            <div className="container" style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '1rem'}}>Меню</strong>
              <button aria-label="Закрыть" onClick={() => setOpen(false)} className={styles.iconBtn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="container" style={{ paddingBottom: 16 }}>
              {NAV.map(i => (
                <a key={i.href} className={styles.mobileLink} href={i.href} onClick={() => setOpen(false)}>{i.label}</a>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
