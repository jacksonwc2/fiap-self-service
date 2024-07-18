import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 100000,
  duration: '1m',
};

// k6 run stress-test.js

export default function () {
  http.get('http://192.168.49.2:30000/produtos/{categoria}?categoria=LANCHE');
  sleep(0.1);
}
