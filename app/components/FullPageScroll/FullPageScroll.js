'use client';
import { useEffect, useRef } from 'react';

export default function FullPageScroll() {
  const lockRef = useRef(false);
  const touchStartY = useRef(0);

  const scrollTimerRef = useRef(null);
  const usingScrollEndRef = useRef(false);

  useEffect(() => {
    const container = document.getElementById('snap');
    if (!container) return;

    const sections = Array.from(container.querySelectorAll('.section'));
    if (!sections.length) return;

    // Поддерживается ли scrollend
    usingScrollEndRef.current = ('onscrollend' in container);

    const finishScroll = () => {
      container.classList.remove('scrolling');
      lockRef.current = false;
    };

    const onScrollEnd = () => {
      if (lockRef.current) finishScroll();
    };

    const onScroll = () => {
      if (!lockRef.current) return;
      clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(finishScroll, 120);
    };

    const currentIndex = () => {
      const top = container.scrollTop;
      let best = 0, bestDist = Infinity;
      sections.forEach((sec, i) => {
        const dist = Math.abs(sec.offsetTop - top);
        if (dist < bestDist) { best = i; bestDist = dist; }
      });
      return best;
    };

    const scrollToIndex = (i) => {
      if (i < 0 || i >= sections.length) return;
      lockRef.current = true;

      container.classList.add('scrolling');

      const top = sections[i].offsetTop;
      container.scrollTo({ top, behavior: 'smooth' });
    };

    const onWheel = (e) => {
      if (document.documentElement.classList.contains('modal-open')) return;
      // if (e.target.closest('[data-scrollable="true"]')) return;

      if (e.cancelable) e.preventDefault();
      if (lockRef.current) return;

      const idx = currentIndex();
      if (e.deltaY > 0 && idx < sections.length - 1) {
        scrollToIndex(idx + 1);
      } else if (e.deltaY < 0 && idx > 0) {
        scrollToIndex(idx - 1);
      }
    };

    const onTouchStart = (e) => {
      if (document.documentElement.classList.contains('modal-open')) return;
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (document.documentElement.classList.contains('modal-open')) return;
      // if (e.target.closest('[data-scrollable="true"]')) return;
      if (e.cancelable && !lockRef.current) e.preventDefault();
    };

    const onTouchEnd = (e) => {
      if (document.documentElement.classList.contains('modal-open')) return;
      if (lockRef.current) return;
      const endY = e.changedTouches[0].clientY;
      const delta = touchStartY.current - endY;
      const threshold = 40; // px
      const idx = currentIndex();

      if (delta > threshold && idx < sections.length - 1) {
        scrollToIndex(idx + 1);
      } else if (delta < -threshold && idx > 0) {
        scrollToIndex(idx - 1);
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd, { passive: true });

    if (usingScrollEndRef.current) {
      container.addEventListener('scrollend', onScrollEnd);
    } else {
      container.addEventListener('scroll', onScroll);
    }

    return () => {
      clearTimeout(scrollTimerRef.current);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      if (usingScrollEndRef.current) {
        container.removeEventListener('scrollend', onScrollEnd);
      } else {
        container.removeEventListener('scroll', onScroll);
      }
    };
  }, []);

  return null;
}
