import { colorsFn } from './colors';

export function replaceColors(msg: string) {
  let message = msg;

  Object.entries(colorsFn).forEach(([key, fn]) => {
    message = message.replace(new RegExp(`\\[${key}\\]([a-zA-Z0-9.\\[\\]]+)`, 'g'), `${fn('$1')}`);
    message = message.replace(new RegExp(`\\[${key}_full\\]([\\S\\s]+)`, 'g'), `${fn('$1')}`);
  });

  return message;
}
