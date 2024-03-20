import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ListJpQuestion.module.css';
import JpAnswer from '../jpAnswer/JpAnswer';

import Suggest from '../suggest/Suggest';

function ListJpQuestion(props) {
    const { jpQuestion } = props;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionId, setQuestionId] = useState(jpQuestion[0]?.id); // Khởi tạo questionId với id của câu hỏi đầu tiên

    useEffect(() => {
        // Cập nhật questionId khi currentQuestionIndex thay đổi
        setQuestionId(jpQuestion[currentQuestionIndex]?.id);
    }, [currentQuestionIndex, jpQuestion]);

    const prevQuestion = () => {
        setCurrentQuestionIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : jpQuestion.length - 1));
    };

    const nextQuestion = () => {
        setCurrentQuestionIndex(prevIndex => (prevIndex < jpQuestion.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div>


            <div className={styles.quiz}>
                <div className={styles.container}>
                    <div className={styles.question_container}>
                        <p className={styles.font}>

                            Câu {questionId}: {jpQuestion[currentQuestionIndex]?.content}

                        </p>
                    </div>
                    <JpAnswer questionId={questionId}></JpAnswer>
                </div>

                <Suggest suggest={jpQuestion[currentQuestionIndex]?.suggest}></Suggest>
            </div>

            <div className={styles.btn_container}>
                <button className={styles.btn} onClick={prevQuestion}>Prev</button>
                <button className={styles.btn} onClick={nextQuestion}>Next</button>
            </div>

        </div>
    );
}

ListJpQuestion.propTypes = {
    jpQuestion: PropTypes.array.isRequired,
};

export default ListJpQuestion;
