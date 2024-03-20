
import axiosClient from "./axiosClient";

const JpQuestApi = {
    GetAllQuestionByRoomId(levelId, roomId) {
        const url = `/JPLevel/${levelId}/JPRoom/${roomId}/Question`;
        return axiosClient.get(url)
    }
};

export default JpQuestApi;