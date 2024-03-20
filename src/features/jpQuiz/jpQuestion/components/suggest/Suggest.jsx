import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../suggest/Suggest.module.css';

Suggest.propTypes = {
    // Định nghĩa các props nếu cần
};

function Suggest(props) {
    const { suggest } = props;

    const [isActive, setIsActive] = useState(false); // Trạng thái hiện tại của suggest

    const handleSuggestClick = () => {
        if (isActive === true) {
            setIsActive(false); // Nếu isActive đang là true, đặt nó thành false
        } else {
            setIsActive(true); // Nếu isActive đang là false, đặt nó thành true
        }
    };


    return (
        <div>
            <div className={`${styles.suggest} ${isActive ? styles.active : ''}`}>
                <div className={styles.suggest_header}>
                    <i class="bx bx-x" onClick={handleSuggestClick}></i>
                    <p> Suggestion </p>
                </div>

                <di className={styles.suggest_body}>
                    <p>{suggest}</p>
                </di>

            </div>

            <div className={styles.btn_suggest} onClick={handleSuggestClick}>
                <i className='bx bx-bulb'></i>
            </div>
        </div>
    );
}

export default Suggest;
