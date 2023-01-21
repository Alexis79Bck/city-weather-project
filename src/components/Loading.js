import styles from '../css_modules/loading.module.css'


export  default function Loading() {

    const loadingLayer = 
                <div className={styles.ldsContainer}>
                    <div className={styles.ldsRing}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>;
    
    return loadingLayer;
}