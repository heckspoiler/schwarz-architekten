'use client';

import React, { useEffect } from 'react';
import styles from './ProjectsSwitch.module.css';
import { SliderStore } from '@/stores/ProjectsStores';

export const ProjectsSwitch = () => {
  const activeView = (SliderStore() as any).activeView;
  const setActiveView = (SliderStore() as any).setActiveView;

  const handleSwitch = (viewKey: string) => {
    if (activeView !== viewKey) {
      setActiveView(viewKey);
    }
  };

  return (
    <div className={styles.Switch}>
      <div className={styles.SwitchOutterContainer}>
        <div className={styles.SwitchInnerContainer}>
          <div className={styles.SwitchContent}>
            <div className={styles.SlideView}>
              <div
                className={styles.SlideIcon}
                key="slide"
                onClick={() => handleSwitch('slide')}
              ></div>
            </div>
            <div
              className={styles.GridView}
              key="grid"
              onClick={() => handleSwitch('grid')}
            >
              <div className={styles.GridItem}></div>
              <div className={styles.GridItem}></div>
              <div className={styles.GridItem}></div>
              <div className={styles.GridItem}></div>
            </div>
          </div>
          <div className={styles.IndicatorContainer}>
            <div
              className={`${styles.Indicator} ${activeView === 'grid' ? styles.IndicatorClicked : ''}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
