
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DOCUMENT: "/document",
  PROJECTS: "/projects",
  VIDEOS: "/videos",
} as const;

export enum ENavPath {
  HOME = '',
  PROJECTS = 'projects',
  VIDEOS = 'videos',
  DOCUMENT = 'document',
}

/**
 * for home page;
 * */
export enum ENavActiveKey {
  TITLE = 'title',
  ABOUT = 'about',
  SERVICE = 'service',
  PRICING = 'pricing',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact',
  PROJECTS = 'projects',
}

export function navOfKey(key: string): ENavActiveKey {
  switch (key) {
    case 'title':
      return ENavActiveKey.TITLE;
    case 'about':
      return ENavActiveKey.ABOUT;
    case 'service':
      return ENavActiveKey.SERVICE;
    case 'pricing':
      return ENavActiveKey.PRICING;
    case 'portfolio':
      return ENavActiveKey.PORTFOLIO;
    case 'contact':
      return ENavActiveKey.CONTACT;
    case 'projects':
      return ENavActiveKey.PROJECTS;
    default:
      return ENavActiveKey.TITLE;
  }
}

