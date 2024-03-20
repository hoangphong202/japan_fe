import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JpLevelFeature from './features/jpLevel/JpLevelFeature';
import JpRoomFeature from './features/jpRoom/JpRoomFeature';
import JpQuestionFeature from './features/jpQuiz/jpQuestion/JpQuestionFeature';
import Loading from './components/loading/Loading';
import JpLevelFeatureAdmin from './featuresAdmin/jpLevel/JpLevelFeatureAdmin';

import JpRoomFeatureAdmin from './featuresAdmin/jpRoom/JpRoomFeatureAdmin';
import InsertJpRoom from './featuresAdmin/jpRoom/insertJpRoom/InsertJpRoom';


import JpQuestionFeatureAdmin from './featuresAdmin/jpQuiz/JpQuestionFeatureAdmin';
import InsertQuiz from './featuresAdmin/jpQuiz/pages/insertQuiz/InsertQuiz';

import UpdateJpLevel from './featuresAdmin/jpLevel/pages/updateJpLevel/UpdateJpLevel';
import InsertJpLevel from './featuresAdmin/jpLevel/pages/insertJpLevel/InsertJpLevel';




function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả sử bạn có một hàm fetchData() để tải dữ liệu từ API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api');
        await response.json();
        setLoading(false); // Khi dữ liệu đã được tải xong, đặt loading thành false
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Nếu có lỗi, đặt loading thành false
      }
    };

    fetchData();
  }, []); // Sử dụng một mảng rỗng để chỉ chạy effect một lần khi component được mount



  return (
    <div>
      {loading && <Loading></Loading>}
      <Router>
        <Routes>
          <Route path="/jplevel" element={<JpLevelFeature />} />
          <Route path="/jplevel/:levelId/jproom" element={<JpRoomFeature />} />
          <Route path="/jplevel/:levelId/jproom/:roomId/Quiz-japan" element={<JpQuestionFeature />} />

          <Route path="/jplevel-admin" element={<JpLevelFeatureAdmin />}></Route>
          <Route path="/jplevel-admin/insert" element={<InsertJpLevel />}></Route>
          <Route path="/jplevel-admin/:levelId/edit" element={<UpdateJpLevel />}></Route>


          <Route path="/jplevel-admin/:levelId/jproom" element={<JpRoomFeatureAdmin />}></Route>
          <Route path="/jplevel-admin/:levelId/jproom/insert" element={<InsertJpRoom />}></Route>


          <Route path="/jplevel-admin/:levelId/jproom/:roomId/Quiz-japan" element={<JpQuestionFeatureAdmin />}></Route>
          <Route path="/jplevel-admin/:levelId/jproom/:roomId/Quiz-japan/insert" element={<InsertQuiz />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
