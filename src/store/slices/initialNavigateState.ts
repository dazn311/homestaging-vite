export interface INavigateState {
  value: number,
  currentPath: string,
  currentHash: string,
  nextHash: string,
}

export const initialNavigateState: INavigateState = {
  value: 0,
  currentPath: '/',
  currentHash: '',
  nextHash: '',
}
