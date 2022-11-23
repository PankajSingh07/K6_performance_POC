import http from "k6/http";

/**
 * Endurance Testing
 * Is done to make sure the software can handle the expected load over a long period of time.
 */

 export const options = {
    insecureSkipTLSVerify: true,
    noCoonectionReuse: false,
    stages: [
      { duration: "2m", target: 100 },   //ramp-up user traffic from 1 to 50 users
      { duration: "1h30m", target: 100 },   //stay for 1.5hrs mins with 50 users
      { duration: "2m", target: 0 },  //ramp-down to 0 users
    ],
  };
  
   
  
  export default () => {
    http.get("https://catfact.ninja/fact");
  };