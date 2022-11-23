import http from "k6/http";
import { check, sleep } from 'k6';


export let options = {
    insecureSkipTLSVerify: true,
    noCoonectionReuse: false,
    vus: 1,
    duration: '1s'
};


export default () => {
    const url = 'https://dummyjson.com/auth/login';
    const payload = JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);
    check(res,{
        'Status was 200': (r) => r.status == 200,
        'Username Matched ': (r) => r.body.includes('kminchelle'),
        'User First Name matched ': (r) => r.body.includes('Jeanne'),
    })


};
