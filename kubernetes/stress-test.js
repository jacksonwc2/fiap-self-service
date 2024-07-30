import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 100,
  duration: '2m',
};

// k6 run stress-test.js

export default function () {
  http.get('http://localhost:30000/produtos/{categoria}?categoria=LANCHE');
  sleep(0.1);
}
