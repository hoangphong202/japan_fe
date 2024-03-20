import axiosAdmin from "./axiosAdmin";

const JpRoomAdminApi = {
    GetAllRoomByLevelId(levelId) {
        const url = `/JPLevel/${levelId}/JPRoom`;
        return axiosAdmin.get(url)
    }
}

export default JpRoomAdminApi