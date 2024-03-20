import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import JpRoomAdminApi from '../../api/admin/JpRoomAdminApi';
import { useParams } from 'react-router-dom';
import styles from './JpRoom.module.css'
import ListJpRoom from './listJpRoom/ListJpRoom';

JpRoomFeatureAdmin.propTypes = {

};



function JpRoomFeatureAdmin(props) {

    const { levelId } = useParams();

    const [JpRooms, setJpRooms] = useState([]);

    useEffect(() => {
        const fetchJpRoom = async () => {
            try {
                const listJpRoomRespone = await JpRoomAdminApi.GetAllRoomByLevelId(levelId);
                console.log("Respone:", listJpRoomRespone);
                setJpRooms(listJpRoomRespone);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchJpRoom();
    }, [levelId])

    return (
        <div>
            <div className={styles.body}>
                <div className={styles.header}>
                    <h1>Room Japan</h1>
                </div>
                <ListJpRoom JpRooms={JpRooms}></ListJpRoom>
            </div>
        </div>
    );
}

export default JpRoomFeatureAdmin;