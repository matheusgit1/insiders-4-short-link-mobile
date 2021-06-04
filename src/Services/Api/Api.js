import axios from 'axios';

const key = '0b097059ae4ed288720d5262d23f914d5e3ce487';

//base url: 'https://api-ssl.bitly.com/v4/'

const Api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    },
});

export default Api;