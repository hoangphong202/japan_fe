import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListJpRoom.module.css'
import { Link, useParams } from 'react-router-dom';

ListJpRoom.propTypes = {

};

function ListJpRoom(props) {
    const { levelId } = useParams();
    const { JpRooms } = props;

    return (
        <div>

            <div className={styles.container}>
                <Link to={`/jplevel-admin/${levelId}/jproom/insert`}><button>thêm</button></Link>


                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {JpRooms.map(JpRoom => (
                            <tr key={JpRoom.id}>
                                <td>{JpRoom.id}</td>

                                <td >
                                    <img src={`/imageRoom/${JpRoom.img_path}`} alt="không có hình" className={styles.size} />
                                </td>

                                <td>{JpRoom.name}</td>

                                <td className={styles.action_buttons}>
                                    <Link to={`/jplevel-admin/${levelId}/jproom/${JpRoom.id}/Quiz-japan`}>View</Link>
                                    <Link to={`/jplevel-admin/edit/${levelId}`}>Edit</Link>
                                    <a href="">Delete</a>
                                </td>
                            </tr>


                        ))}
                    </tbody>

                </table>


            </div>

        </div>
    );
}

export default ListJpRoom;