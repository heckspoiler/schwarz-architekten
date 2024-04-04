import Image from 'next/image';
import styles from './ProjectModal.module.css';

type ProjectModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onRequestClose: () => void;
};

const Modal = ({ isOpen, children, onRequestClose }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.ModalOverlay} onClick={onRequestClose}>
      <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={styles.ModalCloseBtn} onClick={onRequestClose}>
          Schliessen
        </button>
      </div>
    </div>
  );
};

export default Modal;
