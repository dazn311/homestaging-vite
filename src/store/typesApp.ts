/**
 * typesApp
 * */
export type TProject = {
  id: string;
  document_id?: string;
  jkName: string;
  jkTitle: string;
  street: string;
  city?: string;
  dataDoc?: [string,string,string,string,string];
  dataWork?: string[];
  url: string;
  images: string[];
};

type TItemPrice = {
  id: number;
  body: string;
}

export type TTitlePrice = {
  id: number;
  title: string;
  price: number;
}

export type TPricingItemProps = {
  caption: string;
  titles: TTitlePrice[];
  items: TItemPrice[];
}

export type TImageBlockData = {
  id: number;
  docId: string;
  title: string;
  price: number;
  imageUrl: string;
  cls?: string;
  displayOrder: number; // <-- это и есть нужный ключ
}

export type TAboutItemProps = {
  caption: string;
  body: string;
}
