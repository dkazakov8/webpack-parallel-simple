import chalk from 'chalk';

export const colorsMap = {
  red: '[red]',
  blue: '[blue]',
  green: '[green]',
  yellow: '[yellow]',
  redFull: '[red_full]',
  blueFull: '[blue_full]',
  greenFull: '[green_full]',
  yellowFull: '[yellow_full]',
};

export const colorsFn: Record<keyof typeof colorsMap, chalk.Chalk> = {
  red: chalk.red,
  blue: chalk.blue,
  green: chalk.green,
  yellow: chalk.yellow,
  redFull: chalk.red,
  blueFull: chalk.blue,
  greenFull: chalk.green,
  yellowFull: chalk.yellow,
};
