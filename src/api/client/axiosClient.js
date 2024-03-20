import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api', // Địa chỉ cơ sở cho các yêu cầu
    headers: {
        'Content-Type': 'application/json', // Đặt loại dữ liệu của yêu cầu là JSON
    },
});

// Thêm một interceptor cho yêu cầu
axiosClient.interceptors.request.use(function (config) {
    // Thực hiện một số thao tác trước khi gửi yêu cầu
    return config;
}, function (error) {
    // Xử lý lỗi nếu xảy ra trong quá trình gửi yêu cầu
    return Promise.reject(error);
});

// Thêm một interceptor cho phản hồi
axiosClient.interceptors.response.use(function (response) {
    // Xử lý dữ liệu phản hồi nếu mã trạng thái nằm trong khoảng 2xx
    return response.data;
}, function (error) {
    // Xử lý lỗi phản hồi nếu mã trạng thái nằm ngoài khoảng 2xx
    return Promise.reject(error);
});

export default axiosClient;