import React, { useEffect, useState } from 'react';
import ListJpLevel from './components/listLevel/ListJpLevel';
import JPLevelApi from '../../api/client/JpLevelApi';




function JpLevelFeature() {

    const [jpLevels, setJpLevels] = useState([]);

    useEffect(() => {
        const fetchJpLevels = async () => {

            try {
                const listJpLevelsResponse = await JPLevelApi.getAll();
                console.log('Response:', listJpLevelsResponse); // Kiểm tra giá trị của response
                setJpLevels(listJpLevelsResponse); // Sửa đổi từ response.data thành response               
            } catch (error) {
                console.error('Error fetching data:', error);
            }


        };

        fetchJpLevels();
    }, []);

    return (
        <div>
            <ListJpLevel jpLevels={jpLevels} ></ListJpLevel>
        </div>
    );
}

export default JpLevelFeature;