// export type TActiveKey = 'title' | 'about' | 'service' | 'pricing' | 'portfolio' | 'contact';

// @ts-ignore
export enum NavActiveKey {
  TITLE = 'title',
  ABOUT = 'about',
  SERVICE = 'service',
  PRICING = 'pricing',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact',
  PROJECTS = 'projects',
}

// @ts-ignore
export enum NAV_PATH {
  HOME = '',
  PROJECTS = 'projects',
  VIDEOS = 'videos',
  DOCUMENT = 'document',
}

// export const NavActiveKey = {
//   titleApp: 'title',
//   ONE_HOUR: 'hour',
// } as const;

export function navOfKey(key: string): NavActiveKey {
  switch (key) {
    case 'title':
      return NavActiveKey.TITLE;
    case 'about':
      return NavActiveKey.ABOUT;
    case 'service':
      return NavActiveKey.SERVICE;
    case 'pricing':
      return NavActiveKey.PRICING;
    case 'portfolio':
      return NavActiveKey.PORTFOLIO;
    case 'contact':
      return NavActiveKey.CONTACT;
    case 'projects':
      return NavActiveKey.PROJECTS;
    default:
      return NavActiveKey.TITLE;
  }
}

export interface INavigateState {
  value: number,
  currentPath: NAV_PATH,
  currentHash: string,
  nextHash: string,
  activeKey: NavActiveKey,
}

export const initialNavigateState: INavigateState = {
  value: 0,
  currentPath: NAV_PATH.HOME,
  currentHash: '',
  nextHash: '',
  activeKey: NavActiveKey.TITLE,
}
