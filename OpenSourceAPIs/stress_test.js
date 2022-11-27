import http from "k6/http";

/**
 * Stress Testing
 * Involves testing an application under extreme workloads to see how it handles high traffic or data processing. 
 * The objective is to identify the breaking point of an application.
 */
 export const options = {
    insecureSkipTLSVerify: true,
    noCoonectionReuse: false,
    stages: [
      { duration: "1m", target: 50 },   //below noraml load
      { duration: "1m30s", target: 50 },  //stay ther for 90 sec with 50 users
      { duration: "1m", target: 100 },  //normal load
      { duration: "1m30s", target: 100 },
      { duration: "1m", target: 150 },  //near breaking point
      { duration: "1m30s", target: 150 },
      { duration: "1m", target: 250 },  //beyond breaking point
      { duration: "1m30s", target: 250 },
      { duration: "2s", target: 0 },
    ],
  };
  
  
  
  export default () => {
    http.get("https://api.zippopotam.us/us/33162");
    http.get("https://ipinfo.io/161.185.160.93/geo"); 
  };