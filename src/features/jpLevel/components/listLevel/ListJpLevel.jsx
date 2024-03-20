import React from 'react';
import styles from './jpLevel.module.css'
import PropTypes from 'prop-types';

ListJpLevel.propTypes = {
    jpLevels: PropTypes.array.isRequired // Kiểm tra students là một mảng bắt buộc

};

function ListJpLevel(props) {
    const { jpLevels } = props;

    return (
        <div className={styles.body}>
            <h1 className={styles.h1}>Level list</h1>
            <div className={styles.gallery}>

                {jpLevels.map(jpLevels => (
                    <div key={jpLevels.id} className={styles.album_item}>
                        <a href={`/jplevel/${jpLevels.id}/JPRoom`}>
                            <img src={`/imageLevel/${jpLevels.img_path}`} className={styles.size} alt="trống" />

                            <p> {jpLevels.name}</p>
                        </a>

                    </div>


                ))}
            </div>
        </div>

    );
}

export default ListJpLevel;