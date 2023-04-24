import React, { useEffect } from 'react'
import styles from "@/styles/Preloader.module.css";

export default function Preloader() {
  
    return (
        <div className={styles.preloader}>
        <div className={styles['dank-ass-loader']}>
          <div className={styles.row}>
            <div className={`${styles.arrow} ${styles.up} ${styles['outer-[18]']}`}></div>
            <div className={`${styles.arrow} ${styles.down} ${styles['outer-[17]']}`}></div>
            <div className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles['arrow-[16]']}`}></div>
            <div className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles['outer-[15]']}`}></div>
            <div className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles['outer-[14]']}`}></div>
          </div>
          <div className={styles.row}>
            <div className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles['outer-1']}`}></div>
            <div className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles['outer-2']}`}></div>
            <div className={`${styles.arrow} ${styles.up} ${styles.inner} ${styles['inner-6']}`}></div>
            <div className={`${styles.arrow} ${styles.down} ${styles.inner} ${styles['inner-5']}`}></div>
            <div className={`${styles.arrow} ${styles.up} ${styles.inner} ${styles['inner-4']}`}></div>
            <div className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles['outer-13']}`}></div>
            <div className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles['outer-12']}`}></div>
          </div>
          <div className={styles.row}>
            <div className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles['outer-3']}`}></div>
            <div className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles['outer-4']}`}></div>
            <div className={`${styles.arrow} ${styles.down} ${styles.inner} ${styles['inner-1']}`}></div>
            <div className={`${styles.arrow} ${styles.up} ${styles.inner} ${styles['inner-2']}`}></div>
            <div className={`${styles.arrow} ${styles.down} ${styles.inner} ${styles['inner-3']}`}></div>
            <div className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles['outer-11']}`}></div>
            <div className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles['outer-10']}`}></div>
          </div>
          <div className={styles.row}>
            <div className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles['outer-5']}`}></div>
            <div className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles['outer-6']}`}></div>
            <div className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles['outer-7']}`}></div>
            <div className={`${styles.arrow} ${styles.up} ${styles.outer} ${styles['outer-8']}`}></div>
            <div className={`${styles.arrow} ${styles.down} ${styles.outer} ${styles['outer-9']}`}></div>
          </div>
        </div>
      </div>
  )
}
