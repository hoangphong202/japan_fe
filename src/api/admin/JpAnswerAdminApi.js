import axiosAdmin from "./axiosAdmin";

const JpAnswerAdminApi = {
    GetAll(levelId, roomId, questionId) {
        const url = `/JPLevel/${levelId}/JPRoom/${roomId}/Question/${questionId}`
        return axiosAdmin.get(url)
    },
    add(data, levelId, roomId, questionId) {
        const url = `/JPLevel/${levelId}/JPRoom/${roomId}/Question/${questionId}/InsertAnswer`;
        return axiosAdmin.post(url, data)
    },
}

export default JpAnswerAdminApi;