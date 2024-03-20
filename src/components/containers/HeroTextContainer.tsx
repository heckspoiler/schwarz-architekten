import styles from './HeroTextContainer.module.css';

type TextContainerProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

export default function HeroTextContainer({
  as: Container = 'div',
  className,
  children,
  ...restProps
}: TextContainerProps) {
  return <Container className={styles.Container}>{children}</Container>;
}
