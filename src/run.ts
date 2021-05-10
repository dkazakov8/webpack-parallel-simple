import path from 'path';
import { ChildProcess, fork } from 'child_process';

import { colorsFn } from './utils/colors';
import { FIRST_FINISHED } from './utils/constants';
import { replaceColors } from './utils/replaceColors';

export type TypeConfig = {
  onInit?: (processes: Array<ChildProcess>) => void;
  bailOnError: boolean;
  configPaths: Array<string>;
  afterFirstBuild?: () => void;
  execOnConfigRead?: string;
};

const childProcessPath = path.resolve(__dirname, 'childProcess.js');

export function run(config: TypeConfig) {
  let finishedCount = 0;
  let afterFirstBuildCalled = false;

  const childProcesses = config.configPaths.map((configPath) => {
    const childProcess = fork(`${childProcessPath}`, [config.execOnConfigRead || '', configPath], {
      silent: true,
    });

    childProcess.stdout?.on('data', (msgBuffer: Buffer) => {
      let messageTrimmed = msgBuffer.toString().trim();

      if (!afterFirstBuildCalled && messageTrimmed.startsWith(FIRST_FINISHED)) {
        finishedCount += 1;
        messageTrimmed = '';

        if (finishedCount >= config.configPaths.length) {
          config.afterFirstBuild?.();

          afterFirstBuildCalled = true;
        }
      }

      if (!messageTrimmed) return;

      messageTrimmed = replaceColors(messageTrimmed);

      // eslint-disable-next-line no-console
      console.log(messageTrimmed);
    });

    childProcess.stderr?.on('data', (msgBuffer: Buffer) => {
      let messageTrimmed = msgBuffer.toString().trim();
      messageTrimmed = replaceColors(messageTrimmed);

      // TODO: move to config
      if (messageTrimmed.includes('DeprecationWarning')) {
        console.error(colorsFn.yellow(messageTrimmed));

        return;
      }

      console.error(colorsFn.red(messageTrimmed));

      if (config.bailOnError) process.exit(1);
    });

    return childProcess;
  });

  config.onInit?.(childProcesses);
}
