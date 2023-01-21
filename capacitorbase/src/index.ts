import { registerPlugin } from '@capacitor/core';

import type { IBasePlugin } from './definitions';

export * from './definitions';
export * from './web';
export * from './plugin';

export const BasePlugin = registerPlugin<IBasePlugin>('BasePlugin', {
  web: () => import('./web').then(m => new m.BasePluginWeb()),
});
