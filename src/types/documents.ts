export interface IDocument {
  id:          string;
  type:        string;
  mode_id:     string;
  project_key: string;
  createDate:  string | null;
  userRole:    string;
  fileName:    string;
}

export interface IAllDocument {
  type: string,
  name: string,
  database: string,
  data?:IDocument[] | IDescription[] | IAddressBook[] | IImage[] | IBreadcrumbs[]
}

export type TDocTableWork = {
  key: string;
  name: string;
}

export type TDocTablesSource = {
  key: string;
  name: string;
  description: string;
}
export type TDocSource = {
  title: string;
  titleTab: string;
  images: string[];
  data: TDocTablesSource[];
  dataWork: TDocTableWork[];
}

export interface IDescription {
  id:          string;
  title:       string;
  category:    string;
  price:       string;
  project_url: string;
  project_des: string;
  createDate:  string | null;
  end_date:    string;
  document_id: string;
}

export interface IAddressBook {
  address_id:  string;
  code:        string;
  street:      string;
  apartment:   string;
  document_id: string;
}

export interface IImage {
  image_id:          string;
  image_url:         string;
  document_id:       string;
  image_description: string;
}

export interface IBreadcrumbs {
  breadcrumbs_id: string;
  project_title:  string;
  document_id:    string;
}