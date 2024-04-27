'use client';

import styles from './Loading.module.css';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

import { useEffect, useRef } from 'react';

const Loading = () => {
  const pathname = usePathname();
  const ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.inOut' } });

    if (ref.current) {
      tl.to(ref.current, {
        duration: 0.3,
        autoAlpha: 1,
        onComplete: () => {
          gsap.fromTo(
            ref.current,
            { autoAlpha: 0 },
            {
              duration: 0.3,
              autoAlpha: 0,
            }
          );
        },
      });
    }
  }, [pathname]);

  return (
    <div className={styles.Main} ref={ref}>
      <div className={styles.AnimationContainer}>
        <div className={styles.Animation}>
          <div className={styles.Block}></div>
          <div className={styles.Block}></div>
          <div className={styles.Block}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
