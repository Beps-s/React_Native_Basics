import axios from "axios";

const API_BASE_URL = 'http://192.168.18.4/api'

export const request = ({url, method, data}) => {
    axios({
        method: method || 'get',
        url: `${API_BASE_URL}/${url}`,
        data
    });
}