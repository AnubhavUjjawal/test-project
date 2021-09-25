import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  insecureSkipTLSVerify: true,
  // stages: [
  //   { duration: '1m', target: 100 },
  //   { duration: '1m', target: 100 },
  //   { duration: '1m', target: 200 },
  //   { duration: '2m', target: 200 },
  //   { duration: '2m', target: 300 },
  //   { duration: '5m', target: 300 },
  //   { duration: '3m', target: 400 },
  //   { duration: '5m', target: 400 },
  // ],
  // stages: [
  //   { duration: '1m', target: 200 },
  //   { duration: '1m', target: 200 },
  //   { duration: '1m', target: 400 },
  //   { duration: '2m', target: 400 },
  //   { duration: '2m', target: 600 },
  //   { duration: '2m', target: 600 },
  //   { duration: '3m', target: 800 },
  //   { duration: '3m', target: 800 },
  // ],
  // 
  stages: [
    { duration: '1m', target: 1000 },
    { duration: '1m', target: 1000 },
    { duration: '1m', target: 1200 },
    { duration: '2m', target: 1200 },
    { duration: '2m', target: 4800 },
    { duration: '2m', target: 4800 },
    { duration: '3m', target: 6000 },
    { duration: '3m', target: 6000 },
  ],
};

export default function () {
  http.get('https://test-project-1337982796.ap-south-1.elb.amazonaws.com');
  sleep(1);
}
