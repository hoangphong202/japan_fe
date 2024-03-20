import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './insert.module.css'
import JpAnswerAdminApi from '../../../../api/admin/JpAnswerAdminApi';
import { Link, useParams } from 'react-router-dom';

InsertAnswer.propTypes = {

};

function InsertAnswer(props) {

    const { roomId } = useParams();
    const { levelId } = useParams();
    const { questionId } = props;

    const [answers, setAnswers] = useState([
        { content: '', correct: false },
        { content: '', correct: false },
        { content: '', correct: false },
        { content: '', correct: false }
    ]);

    const handleAnswerContentChange = (event, index) => {
        const newAnswers = [...answers];
        newAnswers[index].content = event.target.value;
        setAnswers(newAnswers);
    };

    const handleIsCorrectChange = (event, index) => {
        const newAnswers = [...answers];
        newAnswers[index].correct = event.target.checked;
        setAnswers(newAnswers);
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Chuyển đổi dữ liệu thành mảng dữ liệu
            const formattedData = answers.map(answer => ({
                content: answer.content,
                correct: answer.correct ? 1 : 0
            }));

            console.log("Formatted Data:", formattedData);

            // Gửi yêu cầu API với dữ liệu đã được định dạng
            const addAnswerResponse = await JpAnswerAdminApi.add(formattedData, levelId, roomId, questionId);
            console.log("Response:", addAnswerResponse);

            // Xử lý thành công, có thể hiển thị thông báo thành công hoặc chuyển hướng
            alert('Thêm Answer thành công!');
            window.location.reload(); // Load lại trang 

        } catch (error) {
            console.error("Error adding Answer:", error);
            // Xử lý lỗi, có thể hiển thị thông báo lỗi cho người dùng
        }
    };

    return (

        <div>
            <form onSubmit={handleSubmit}>
                {answers.map((answer, index) => (
                    <div key={index}>
                        <label className={styles.label}>{`Answer ${index + 1}`}</label>
                        <input className={styles.o_nhap} type="text" value={answer.content} onChange={(event) => handleAnswerContentChange(event, index)} required />
                        <input className={styles.o_checkbox} type="checkbox" checked={answer.correct} onChange={(event) => handleIsCorrectChange(event, index)} /> Đúng
                        <br />
                    </div>
                ))}
                <div className={styles.btn}>
                    <button type="submit">Add Answer</button>

                </div>
            </form>
            <Link to={`/jplevel-admin/${levelId}/jproom/${roomId}/Quiz-japan`}>Back</Link> {/* Sử dụng onClick để xử lý sự kiện */}

        </div>
    );
}

export default InsertAnswer;
