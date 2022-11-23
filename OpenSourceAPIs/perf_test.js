import http from "k6/http";
// import { sleep } from "k6";
import { check, sleep } from 'k6';


export let options = {
    insecureSkipTLSVerify: true,
    noCoonectionReuse: false,
    vus: 10,
    duration: '10s'
};


export default () => {
  const res = http.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  check(res, { 'status was 200': (r) => r.status == 200 });
  http.get("https://catfact.ninja/fact");
  sleep(1);
  http.get("https://api.coindesk.com/v1/bpi/currentprice.json");
  http.get("https://www.boredapi.com/api/activity");
  http.get("https://dog.ceo/api/breeds/image/random");
  http.get("https://api.zippopotam.us/us/33162");
  http.get("https://ipinfo.io/161.185.160.93/geo");
};
