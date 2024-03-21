import styles from './HeroTextContainer.module.css';

type TextContainerProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  slice: {
    variation: 'default' | 'projects';
  };
};

export default function HeroTextContainer({
  as: Container = 'div',
  children,
  slice,
}: TextContainerProps) {
  return (
    <>
      {slice.variation === 'default' && (
        <Container className={styles.Container}>{children}</Container>
      )}

      {slice.variation === 'projects' && (
        <>
          <Container className={styles.Container}>{children}</Container>
          <Container className={styles.ProjectsContainer}>{children}</Container>
        </>
      )}
    </>
  );
}
