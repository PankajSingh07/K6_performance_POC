import http from "k6/http";

/**
 * Load Testing
 * checks the application’s ability to perform under anticipated user loads. 
 * The objective is to identify performance bottlenecks before the software application goes live.
 */

 export const options = {
    insecureSkipTLSVerify: true,
    noCoonectionReuse: false,
    stages: [
      { duration: "2m", target: 50 },   //ramp-up user traffic from 1 to 50 users
      { duration: "5m", target: 50 },   //stay for 5 mins with 50 users
      { duration: "2m", target: 0 },  //ramp-down to 0 users
    ],
    threshold:{
      http_req_duration: ['p(99)<100'],  //99% request must complete in less than 100ms
    }
  };
  
  
  export default () => {
    http.get("https://catfact.ninja/fact");
  };