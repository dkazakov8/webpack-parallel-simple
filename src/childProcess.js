const configPath = process.argv[3];
const execOnConfigRead = process.argv[2];

// eslint-disable-next-line no-eval
eval(execOnConfigRead);

const { build } = require('./build');

build({ config: require(configPath).default });
