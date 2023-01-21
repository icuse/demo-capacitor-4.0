import { WebPlugin } from '@capacitor/core';

import type { IBasePlugin } from './definitions';

export class BasePluginWeb extends WebPlugin implements IBasePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    let { value } = options;
    console.log('Echo', value);
    value = `Plugin Base ejecutado en Web - ${value}`;
    return Promise.resolve({ value });
  }
}
