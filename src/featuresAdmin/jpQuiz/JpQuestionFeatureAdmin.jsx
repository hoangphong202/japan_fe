import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import JpQuestAdminApi from '../../api/admin/JpQuestAdminApi';
import { useParams } from 'react-router-dom';
import ListJpQuest from './components/listJpQuest/ListJpQuest';

JpQuestionFeatureAdmin.propTypes = {

};

function JpQuestionFeatureAdmin(props) {

    const { levelId } = useParams();
    const { roomId } = useParams();

    const [Jpquest, setJpquest] = useState([]);

    useEffect(() => {
        const fetchJpQuest = async () => {
            try {
                const listJpQuestResponse = await JpQuestAdminApi.GetAll(levelId, roomId);
                console.log('Response:', listJpQuestResponse);
                setJpquest(listJpQuestResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchJpQuest();
    }, [levelId, roomId])

    return (
        <div>
            <ListJpQuest Jpquest={Jpquest}></ListJpQuest>
        </div>
    );
}

export default JpQuestionFeatureAdmin;