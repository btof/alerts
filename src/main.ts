import { Playground } from './alertsProvider/playground';
import { Interval } from './interval/interval';

try {
  const playground = new Playground();
  playground.startGraphql();

  const interval = new Interval();
  interval.startInterval();
} catch (e) {
  console.log(e);
}
