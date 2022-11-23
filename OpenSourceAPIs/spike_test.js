import http from "k6/http";

/**
 * Spike Testing
 * Tests the software’s reaction to sudden large spikes in the load generated by users.
 */

 export const options = {
    insecureSkipTLSVerify: true,
    noCoonectionReuse: false,
    stages: [
      { duration: "5s", target: 50 },   //below noraml load
      { duration: "30s", target: 50 },
      { duration: "5s", target: 400 },  //spike to 400 users
      { duration: "30s", target: 400 }, //stay at 400 users for nect 30 sec
      { duration: "5s", target: 50 },  //scale down
      { duration: "30s", target: 50 },
      { duration: "5s", target: 0 },
    ],
  };
  
  
  export default () => {
    http.get("https://catfact.ninja/fact");
    http.get("https://www.boredapi.com/api/activity");
    http.get("https://dog.ceo/api/breeds/image/random");
    http.get("https://api.zippopotam.us/us/33162");
    http.get("https://ipinfo.io/161.185.160.93/geo");
  };