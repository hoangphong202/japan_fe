import axiosAdmin from "./axiosAdmin";

const JpQuestAdminApi = {
    GetAll(levelId, roomId) {
        const url = `/JPLevel/${levelId}/JPRoom/${roomId}/Question`
        return axiosAdmin.get(url)
    },

    add(data, levelId, roomId) {
        const url = `/JPLevel/${levelId}/JPRoom/${roomId}/Question/InsertQuestion`;
        return axiosAdmin.post(url, data)
    },
}

export default JpQuestAdminApi;