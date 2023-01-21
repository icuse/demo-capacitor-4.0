import type { IBasePlugin } from './definitions';
import { BasePlugin } from './index';

export class BaseWrapper implements IBasePlugin {
  echo(options: { value: string }): Promise<{ value: string }> {
    return BasePlugin.echo(options);
  }
}
