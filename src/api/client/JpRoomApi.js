import axiosClient from "./axiosClient";

const JpRoomApi = {
    getAllByLevelId(levelId) {
        const url = `/JPLevel/${levelId}/JPRoom`;
        return axiosClient.get(url)
    }
};

export default JpRoomApi;