import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next';
import styles from './Link.module.css';
import Arrow from './Arrow';

export default function Link({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink className={styles.Link} {...restProps}>
      <div className={styles.AnchorContainer}>
        Mehr sehen
        <Arrow />
      </div>
    </PrismicNextLink>
  );
}
