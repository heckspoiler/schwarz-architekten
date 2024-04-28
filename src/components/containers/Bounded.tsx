'use client';

import { useEffect, useRef } from 'react';
import styles from './Bounded.module.css';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

type BoundedProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

export default function Bounded({
  as: Comp = 'section',
  className,
  children,
  ...restProps
}: BoundedProps) {
  const pathname = usePathname();
  const ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    if (ref.current) {
      tl.to(ref.current, {
        duration: 0.3,
        autoAlpha: 0,
        blur: 5,
        y: 20,
        onComplete: () => {
          gsap.fromTo(
            ref.current,
            { autoAlpha: 0, y: 20 },
            {
              duration: 0.3,
              autoAlpha: 1,
              y: 0,
            }
          );
        },
      });
    }
  }, [pathname]);
  return (
    <Comp className={styles.Main} {...restProps} ref={ref}>
      {children}
    </Comp>
  );
}
