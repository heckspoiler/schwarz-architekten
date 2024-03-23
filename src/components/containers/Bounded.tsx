import styles from './Bounded.module.css';

type BoundedProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

export default function Bounded({
  as: Comp = 'section',
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp className={styles.Main} {...restProps}>
      {children}
    </Comp>
  );
}
