import React from 'react';
import PropTypes from 'prop-types';
import styles from './jproom.module.css'
import { useParams } from 'react-router-dom';

ListJpRoom.propTypes = {

};

function ListJpRoom(props) {
    const { JpRoom } = props;
    const { levelId } = useParams();
    return (
        <div className={styles.body}>
            <h1 className={styles.h1}>Rooms of JLPT N{levelId}</h1>
            <div className={styles.gallery}>
                {JpRoom.map(jpRooms => (

                    <div key={jpRooms.id} className={styles.album_item}>
                        <a href={`/jplevel/${levelId}/JPRoom/${jpRooms.id}/Quiz-japan`}>
                            <img src={`/imageRoom/${jpRooms.img_path}`} className={styles.size} alt="trống" />
                            <p>{jpRooms.name} </p>
                        </a>
                    </div>



                ))}
            </div>
        </div>

    );
}

export default ListJpRoom;