import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 10,
  duration: '5m',
};

// k6 run stress-test.js

export default function () {
  http.get('http://localhost:30000/produtos/{categoria}?categoria=LANCHE');
  sleep(1);
}
