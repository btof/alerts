import { getData } from '../midasson/getters/getData';

export class Interval {
  startInterval() {
    setInterval(() => {
      getData();
    }, 4000);
  }
}
