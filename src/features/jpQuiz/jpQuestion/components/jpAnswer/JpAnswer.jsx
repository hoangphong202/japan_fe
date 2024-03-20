import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import styles from './Answer.module.css'
import JpAnswerApi from '../../../../../api/client/JpAnswerApi';

JpAnswer.propTypes = {

};

function JpAnswer(props) {

    const { questionId } = props;

    const { levelId } = useParams();
    const { roomId } = useParams();

    const [JpAnswer, setJpAnswer] = useState([]);

    useEffect(() => {

        const fetchJpAnswer = async () => {

            try {
                const listJpAnswerRespone = await JpAnswerApi.GetAllAnswerByQuestionId(levelId, roomId, questionId);
                console.log('Respone', listJpAnswerRespone);
                setJpAnswer(listJpAnswerRespone);
            } catch (error) {
                console.error('Error fetching Data', error);
            }


        }
        fetchJpAnswer();

    }, [levelId, roomId, questionId])

    const [correctAnswerId, setCorrectAnswerId] = useState(null);

    const checkAnswer = (id) => {
        setCorrectAnswerId(id);
    };


    const ResetAnser = () => {
        setCorrectAnswerId(null);
    }


    return (
        <div>

            <div className={styles.answer_contaier}>
                {JpAnswer.map(JpAnswers => (

                    <ul key={JpAnswers.id}>
                        <li
                            onClick={() => checkAnswer(JpAnswers.id)}
                            className={correctAnswerId === JpAnswers.id ? (JpAnswers.correct ? styles.correct : styles.incorrect) : ""}
                        >
                            {JpAnswers.content}
                            {correctAnswerId === JpAnswers.id ? (JpAnswers.correct ? <i className={`bx bx-circle ${styles.o} `}></i> : <i className={`bx bx-x ${styles.x}`}></i>) : ""}

                        </li>

                    </ul>

                ))}
            </div>

            <button className={styles.btn} onClick={ResetAnser}>Reset</button>
        </div >
    );
}

export default JpAnswer;