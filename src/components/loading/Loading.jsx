import React from 'react';
import styles from './loading.module.css';

function Loading() {

    return (
        <div className={styles.loading_overlay}>
            <div className={styles.loading_spinner}>
                <h2>Loading...</h2>
                {/* Thêm spinner hoặc hình ảnh loading tại đây */}
            </div>
        </div>
    );
}

export default Loading;
