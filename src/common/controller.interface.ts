export interface Controller<T, R> {
  (params: T): Promise<R> | R;
}
