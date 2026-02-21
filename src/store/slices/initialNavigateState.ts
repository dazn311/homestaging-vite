import {ENavPath, ENavActiveKey} from "@/shared/model/routes.ts";


export interface INavigateState {
  value: number,
  currentPath: ENavPath,
  currentHash: string,
  nextHash: string,
  activeKey: ENavActiveKey,
}

// export const NavActiveKey = {
//   titleApp: 'title',
//   ONE_HOUR: 'hour',
// } as const;



export const initialNavigateState: INavigateState = {
  value: 0,
  currentPath: ENavPath.HOME,
  currentHash: '',
  nextHash: '',
  activeKey: ENavActiveKey.TITLE,
}
