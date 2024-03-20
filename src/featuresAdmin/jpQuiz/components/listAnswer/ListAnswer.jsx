import React, { useEffect, useState } from 'react';
import JpAnswerAdminApi from '../../../../api/admin/JpAnswerAdminApi';
import { useParams } from 'react-router-dom';
import styles from './ListAnswer.module.css';

function ListAnwser(props) {

    const { levelId } = useParams();
    const { roomId } = useParams();
    const { questionId } = props;


    const [JpAnswer, setJpAnswer] = useState([]);

    useEffect(() => {
        const fetchJpQuest = async () => {
            try {
                const Response = await JpAnswerAdminApi.GetAll(levelId, roomId, questionId);
                console.log('Response:', Response);
                setJpAnswer(Response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchJpQuest();
    }, [levelId, roomId, questionId])


    return (
        <div>
            {JpAnswer.map(JpAnswer => (
                <div className={JpAnswer.correct ? styles.correct : styles.incorrect}>
                    {JpAnswer.content}
                </div>

            ))}
        </div>
    );
}

export default ListAnwser;