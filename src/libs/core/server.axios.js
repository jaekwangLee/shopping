import axios from 'axios';
import { REQUESTL_BASE_URL } from '@utils/variables';

axios.defaults.withCredentials = true;

export default function axiosWithCookie(context, config) {
    const cookie = (context.req && context.req.headers && context.req.headers.cookie) || '';
    if (cookie) {
        axios.defaults.headers.Cookie = cookie;
    }

    return axios[config.method](REQUESTL_BASE_URL + config.url, config.params || {});
}
