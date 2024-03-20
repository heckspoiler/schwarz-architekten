import Image from 'next/image';
import styles from './Arrow.module.css';

type ArrowProps = {
  as?: React.ElementType;
  className?: string;
};

export default function Arrow({ className, ...restProps }: ArrowProps) {
  return (
    <Image
      src="/icons/arrow.svg"
      alt="Arrow"
      width={10}
      height={10}
      className={styles.Arrow}
    />
  );
}
