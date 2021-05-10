import webpack from 'webpack';

import { LOG_PREFIX } from './constants';
import { colorsMap } from './colors';

export function logDone(stats: webpack.Stats, MSG_APP: string) {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const buildTime = (stats.endTime - stats.startTime) / 1000;

  // eslint-disable-next-line no-console
  console.log(
    `${LOG_PREFIX} Finished building ${MSG_APP} within ${colorsMap.yellow}${buildTime} seconds`
  );
}
