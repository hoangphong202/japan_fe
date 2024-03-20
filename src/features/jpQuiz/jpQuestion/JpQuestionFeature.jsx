import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import ListJpQuestion from './components/listJpQuestion/ListJpQuestion';
import styles from './JpQuestion.module.css'
import JpQuestApi from '../../../api/client/JpQuestApi';

JpQuestionFeature.propTypes = {

};

function JpQuestionFeature(props) {

    const { levelId } = useParams();
    const { roomId } = useParams();

    const [jpQuestion, setJpQuestion] = useState([]);

    useEffect(() => {
        const fetchJpQuestion = async () => {
            try {
                const listJpQuestionRespone = await JpQuestApi.GetAllQuestionByRoomId(levelId, roomId);
                console.log('Respone:', listJpQuestionRespone);
                setJpQuestion(listJpQuestionRespone);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchJpQuestion();
    }, [levelId, roomId])

    return (
        <div className={styles.body}>

            <div className={styles.home}>
                <a href={`/jplevel/${levelId}/JPRoom`}>
                    <i class='bx bxs-arrow-from-right'></i>
                </a>
            </div>

            <ListJpQuestion jpQuestion={jpQuestion} />
        </div>
    );
}

export default JpQuestionFeature;