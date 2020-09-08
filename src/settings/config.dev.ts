import { ISettings } from './settings';

declare const process;

const devConfig: ISettings = {
  env: process.env.ENV || 'dev',
  port: 8999,
};

export default devConfig;
