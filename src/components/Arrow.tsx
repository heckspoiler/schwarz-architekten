import Image from 'next/image';
import styles from './Arrow.module.css';

type ArrowProps = {
  as?: React.ElementType;
  className?: string;
  width?: number;
  height?: number;
};

export default function Arrow({ className, width, height }: ArrowProps) {
  return (
    <Image
      src="/icons/arrow.svg"
      alt="Arrow"
      width={width || 10}
      height={height || 10}
      className={styles.Arrow}
    />
  );
}
