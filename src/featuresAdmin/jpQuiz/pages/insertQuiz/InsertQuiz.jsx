import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './insert.module.css'
import JpQuestAdminApi from '../../../../api/admin/JpQuestAdminApi';
import { useParams } from 'react-router-dom';
import JpAnswerAdminApi from '../../../../api/admin/JpAnswerAdminApi';
import InsertAnswe from './InsertAnswer';
import InsertAnswer from './InsertAnswer';

InsertQuiz.propTypes = {

};

function InsertQuiz(props) {
    const { roomId } = useParams();
    const { levelId } = useParams();

    const [content, setContent] = useState('');
    const [suggest, setSuggest] = useState(''); // Lưu trữ tên của tệp
    const [questionId, setQuestionId] = useState(''); // Lưu ID của câu hỏi mới thêm





    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSuggestChange = (event) => {

        setSuggest(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const QuestionData = { content, suggest };
            const addQuizResponse = await JpQuestAdminApi.add(QuestionData, levelId, roomId);
            console.log("Response:", addQuizResponse);

            setQuestionId(addQuizResponse.id);

        } catch (error) {
            console.error("Error adding Quiz:", error);
            // Xử lý lỗi, có thể hiển thị thông báo lỗi cho người dùng
        }
    };


    return (
        <div>

            <div className={styles.body}>


                <div className={styles.h2}>Thêm Quiz</div>
                <div className={styles.form}>

                    <form onSubmit={handleSubmit}>
                        <label className={styles.label} >Question:</label>
                        <textarea name="content" onChange={handleContentChange} required></textarea>
                        <br />

                        <label className={styles.label}>Suggetion:</label>
                        <textarea name="suggest" onChange={handleSuggestChange} ></textarea>
                        <br />


                        <div className={styles.btn}>
                            <button type="submit">Add quiz</button>
                            <button type="button" >Back</button>
                        </div>

                    </form>

                    <InsertAnswer questionId={questionId}></InsertAnswer>


                </div>
            </div>
        </div>
    );
}

export default InsertQuiz;