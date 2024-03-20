import styles from './HeroImageContainer.module.css';

type ImageContainerProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

export default function HeroImageContainer({
  as: Container = 'div',
  className,
  children,
  ...restProps
}: ImageContainerProps) {
  return <Container className={styles.Container}>{children}</Container>;
}
