import axiosAdmin from "./axiosAdmin"

const JpLevelAdminApi = {
    GetAll() {
        const url = '/JPLevel'
        return axiosAdmin.get(url)
    },

    add(data) {
        const url = '/JPLevel/Insert';
        return axiosAdmin.post(url, data)
    },

    update(levelId, data) {
        const url = `/JPLevel/${levelId}/Update`;
        return axiosAdmin.put(url, data)
    },

    remove(levelId) {
        const url = `/JPLevel/${levelId}/Delete`;
        return axiosAdmin.delete(url)
    }

}

export default JpLevelAdminApi;