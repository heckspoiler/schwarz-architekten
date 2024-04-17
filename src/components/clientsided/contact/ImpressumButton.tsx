'use client';

import Arrow from '@/components/Arrow';
import React from 'react';
import styles from './ImpressumButton.module.css';
import { ImpressumVisible } from '@/stores/ImpressumStores';

export const ImpressumButton = () => {
  const { isVisible, setIsVisible } = ImpressumVisible() as {
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
  };
  return (
    <div className={styles.Impressum} onClick={() => setIsVisible(true)}>
      <h3>Impressum</h3>
      <Arrow />
    </div>
  );
};
