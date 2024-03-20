import axiosClient from "./axiosClient";

const JPLevelApi = {
    getAll(params) {
        const url = '/JPLevel';
        return axiosClient.get(url, { params })
    }
};

export default JPLevelApi;