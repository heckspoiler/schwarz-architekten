import styles from './ImageGridContainer.module.css';

type TextContainerProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

export default function ImageGridContainer({
  as: Container = 'section',
  children,
}: TextContainerProps) {
  return <Container className={styles.Container}>{children}</Container>;
}
