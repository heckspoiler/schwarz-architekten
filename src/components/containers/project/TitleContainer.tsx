import styles from './TitleContainer.module.css';

type TextContainerProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

export default function TitleContainer({
  as: Container = 'section',
  children,
}: TextContainerProps) {
  return <Container className={styles.Container}>{children}</Container>;
}
