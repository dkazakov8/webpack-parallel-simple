## Simple lib for parallel Webpack builds

*DEPRECATED: use https://github.com/dkazakov8/dk-webpack-parallel-simple instead*

### Motivation

The existing library [parallel-webpack](https://github.com/trivago/parallel-webpack) is not maintained,
has huge codebase, does not support custom communication between processes, does not show low-level
errors, requires separate file with configs.

This one is a light alternative based on internal Node.js [child_process fork](https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options)

### Usage

```javascript
import { ChildProcess } from 'child_process';
import { run, TypeConfig } from 'webpack-parallel-simple';

let childProcesses: Array<ChildProcess> = [];

const parallelConfig: TypeConfig = {
    onInit(processes: Array<ChildProcess>) { childProcesses = processes; },
    bailOnError: false,
    configPaths: [
        path.resolve(__dirname, './client.config'),
        path.resolve(__dirname, './server.config'),
    ],
    afterFirstBuild() {
        childProcesses.forEach((childProcess) => {
            childProcess.send('SOME_MESSAGE');
        });
        
        // ... maybe start Node.js server, browser reload service, file generation service
    },
    execOnConfigRead: `require('@babel/register')({ extensions: ['.ts'] });`,
};

run(parallelConfig);
```

### Params

`bailOnError` - if true all processes will be terminated on the first error

`configPaths` - array of config files' paths

`afterFirstBuild` (optional) - callback that called after first compiler run on every config passed

`execOnConfigRead` (optional) - some expression evaluated before config's read. Useful when you use
modern JS or TS syntax not understandable by used Node.js version

`onInit` (optional) - passes instances of forked processes so you are able to send messages to your webpack processes and get answers
