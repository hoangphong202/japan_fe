import React, { useState } from 'react';
import PropTypes from 'prop-types';
import JpLevelAdminApi from '../../../../api/admin/JpLevelAdminApi';
import { Link, useParams } from 'react-router-dom';

function UpdateJpLevel(props) {

    const { levelId } = useParams();

    const [name, setName] = useState('');
    const [imgPath, setImgPath] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleImgPathChange = (event) => {
        // Xử lý lưu trữ tên tệp ở đây
        const fileName = event.target.files[0].name;
        setImgPath(fileName);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Tạo dữ liệu cập nhật
            const jpLevelData = { name, img_path: imgPath };
            // Gọi API để cập nhật mức độ
            const updateJpLevelResponse = await JpLevelAdminApi.update(levelId, jpLevelData);
            console.log("Update response:", updateJpLevelResponse);
            // Xử lý thành công, có thể hiển thị thông báo hoặc chuyển hướng
        } catch (error) {
            console.error("Error updating JPLevel:", error);
            // Xử lý lỗi, có thể hiển thị thông báo lỗi cho người dùng
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Image Path:</label>
                    <input type="file" onChange={handleImgPathChange} />
                </div>
                <button type="submit">Update JPLevel</button>
            </form>
            <Link to="/jplevel-admin">Go to JPLevel</Link>
        </div>
    );
}

UpdateJpLevel.propTypes = {
};

export default UpdateJpLevel;
