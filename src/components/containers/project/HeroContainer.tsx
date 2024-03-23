import styles from './HeroContainer.module.css';

type TextContainerProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

export default function HeroContainer({
  as: Container = 'section',
  children,
}: TextContainerProps) {
  return <Container className={styles.Container}>{children}</Container>;
}
