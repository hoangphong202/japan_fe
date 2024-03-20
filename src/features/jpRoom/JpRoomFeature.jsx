import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import ListJpRoom from './components/ListJpRoom';
import styles from './jproom.module.css'
import JpRoomApi from '../../api/client/JpRoomApi';



function JpRoomFeature() {

    // Sử dụng useParams để lấy giá trị của levelId từ URL
    const { levelId } = useParams();

    const [JpRooms, setJpRooms] = useState([]);

    useEffect(() => {
        const fetchJpRooms = async () => {
            try {
                const listJpRoomReponse = await JpRoomApi.getAllByLevelId(levelId); // Truyền levelId vào hàm getAllByLevelId
                console.log('Response:', listJpRoomReponse); // Kiểm tra giá trị của response
                setJpRooms(listJpRoomReponse); // Sửa đổi từ response.data thành response               

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchJpRooms();
    }, [levelId]);

    return (
        <div>

            <div className={styles.home}>
                <a href={`/jplevel`}>
                    <i class='bx bxs-arrow-from-right'></i>
                </a>
            </div>

            <ListJpRoom JpRoom={JpRooms}></ListJpRoom>
        </div>
    );
}

export default JpRoomFeature;