export type TNavmenu = {
  url: string;
  title: string;
};

export type TDocument = {
  docId: string;
  url: string;
  title: string;
};

export type TNavMenuSub = {
  title: string;
  jkName: string;
  projectId: string;
  children: TDocument[];
};