import devConfig from './config.dev';
import prodConfig from './config.prod';

declare const process;
const env = process.env.ENV || 'dev';

const config = env.indexOf('prod') > -1 ? prodConfig : devConfig;

export interface ISettings {
  env: string;
  port: number;
}

export class Settings {
  private settings: ISettings;

  get(): ISettings {
    if (!this.settings) {
      this.settings = config as ISettings;
    }

    return this.settings;
  }
}

export const settings = new Settings();
