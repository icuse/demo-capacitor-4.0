export interface IBasePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
