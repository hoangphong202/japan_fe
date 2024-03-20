import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import JpLevelAdminApi from '../../api/admin/JpLevelAdminApi';
import ListJpLevel from './components/listJpLevel/ListJpLevel';
import styles from './JpLevel.module.css'

JpLevelFeatureAdmin.propTypes = {

};

function JpLevelFeatureAdmin(props) {

    const [jpLevels, setJpLevels] = useState([]);

    useEffect(() => {
        const fetchJpLevels = async () => {
            try {
                const listJpLevelsResponse = await JpLevelAdminApi.GetAll();
                console.log('Response:', listJpLevelsResponse);
                setJpLevels(listJpLevelsResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchJpLevels();
    }, [])

    return (
        <div>
            <div className={styles.body}>
                <div className={styles.header}>
                    <h1>Level Japan</h1>
                </div>
                <ListJpLevel jpLevels={jpLevels}></ListJpLevel>
            </div>

        </div>
    );
}

export default JpLevelFeatureAdmin;