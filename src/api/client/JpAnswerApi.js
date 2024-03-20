import axiosClient from "./axiosClient";

const JpAnswerApi = {
    GetAllAnswerByQuestionId(levelId, roomId, questionId) {
        const url = `/JPLevel/${levelId}/JPRoom/${roomId}/Question/${questionId}`;
        return axiosClient.get(url)
    }

};

export default JpAnswerApi;