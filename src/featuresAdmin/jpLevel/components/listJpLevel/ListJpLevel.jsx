import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListJpLevel.module.css'
import { Link } from 'react-router-dom';
import JpLevelAdminApi from '../../../../api/admin/JpLevelAdminApi';

ListJpLevel.propTypes = {

};

function ListJpLevel(props) {

    const handleDelete = async (levelId) => {
        try {
            await JpLevelAdminApi.remove(levelId); // Gọi API để xóa mục
            window.location.reload(); // Load lại trang sau khi xóa thành công

        } catch (error) {
            console.error("Error deleting JPLevel:", error);
            // Xử lý lỗi, có thể hiển thị thông báo lỗi cho người dùng
        }
    };


    const { jpLevels } = props;



    return (
        <div>

            <div className={styles.container}>
                <Link to="/jplevel-admin/insert"><button>thêm</button></Link>

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

                        {jpLevels.map(jpLevel => (
                            <tr key={jpLevel.id}>

                                <td >{jpLevel.id}</td>

                                <td >
                                    <img src={`/imageLevel/${jpLevel.img_path}`} alt="không có hình" className={styles.size} />
                                </td>

                                <td >{jpLevel.name}</td>

                                <td className={styles.action_buttons}>
                                    <Link to={`/jplevel-admin/${jpLevel.id}/jproom`}>View</Link>
                                    <Link to={`/jplevel-admin/${jpLevel.id}/edit`}>Edit</Link>
                                    <Link href="#" onClick={() => handleDelete(jpLevel.id)}>Delete</Link>
                                </td>


                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </div >
    );
}

export default ListJpLevel;