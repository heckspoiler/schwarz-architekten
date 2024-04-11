'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Arrow.module.css';

type ArrowProps = {
  as?: React.ElementType;
  className?: string;
  width?: number;
  height?: number;
};

export default function Arrow({ className, width, height }: ArrowProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [arrowSize, setArrowSize] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setArrowSize(7);
    } else {
      setArrowSize(8);
    }
  }, [isMobile]);
  return (
    <Image
      src="/icons/arrow.svg"
      alt="Arrow"
      width={arrowSize || width || 10}
      height={arrowSize || height || 10}
      className={styles.Arrow}
    />
  );
}
