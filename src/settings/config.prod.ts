import { ISettings } from './settings';

declare const process;

const prodConfig: ISettings = {
  env: process.env.ENV || 'prod',
  port: process.env.PORT || 8999,
};

export default prodConfig;
