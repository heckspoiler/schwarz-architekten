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
    if (ref.current) {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Subtle fade out with a slight upward movement
      tl.to(ref.current, {
        duration: 0.2,
        autoAlpha: 0,
        x: -10,
        ease: 'power2.inOut',
      })
        .addLabel('endFadeOut')

        .fromTo(
          ref.current,
          {
            autoAlpha: 0,
            x: 10,
          },
          {
            duration: 0.3,
            autoAlpha: 1,
            ease: 'power2.out',
            x: 0,
            immediateRender: false,
          },
          'endFadeOut+=0.1'
        );
    }
  }, [pathname]);

  return (
    <Comp className={className || styles.Main} {...restProps} ref={ref}>
      {children}
    </Comp>
  );
}
