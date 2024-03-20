import React, { useState } from 'react';
import JpLevelAdminApi from '../../../../api/admin/JpLevelAdminApi';

function InsertJpLevel() {
    const [name, setName] = useState('');
    const [imgPath, setImgPath] = useState(''); // Lưu trữ tên của tệp

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleImgPathChange = (event) => {
        const fileName = event.target.files[0].name; // Lấy tên của tệp
        setImgPath(fileName); // Lưu trữ tên của tệp vào state
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const jpLevelData = { name, img_path: imgPath };
            const addJpLevelResponse = await JpLevelAdminApi.add(jpLevelData);
            console.log("Response:", addJpLevelResponse);
            // Xử lý thành công, có thể hiển thị thông báo thành công hoặc chuyển hướng
            alert('Thêm JPLevel thành công!');
            window.location.reload(); // Load lại trang 

        } catch (error) {
            console.error("Error adding JPLevel:", error);
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
                <button type="submit">Add JPLevel</button>
            </form>
        </div>
    );
}

export default InsertJpLevel;
