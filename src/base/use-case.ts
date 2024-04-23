export interface UseCase<S, T> {
  execute(state: S): Promise<T>;
}
