import axios from 'axios';
import qs from 'qs';
import { REQUESTL_BASE_URL } from '@utils/variables';

axios.defaults.withCredentials = true;
// for test
const client = axios.create({
    baseURL: REQUESTL_BASE_URL,
    headers: {
        post: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        // WithCredentials: true,
    },
    paramsSerializer(params) {
        return qs.stringify(params, { indices: false });
    },
});

client.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

// 인터셉터 설정
client.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const { config } = error;
        return error;
    },
);

export const makeCancelable = promise => {
    let _isCanceled = false;

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(
            val => (_isCanceled ? reject(false) : resolve(val)),
            err => (_isCanceled ? reject(false) : reject(err)),
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            _isCanceled = true;
        },
    };
};

export default client;
