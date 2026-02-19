
import { baseApi } from './baseApi.ts'
import type {
  TDocument,
} from "./getDocDetails.ts";
import type {
  IAllDocument,
  IDescription,
  IDocument,
  TDocDataWork,
  TDocSource,
  TDocTablesSource
} from "../types/documents.ts";


export type TDocumentDto = {
  type: string;
  name: string;
  database: string;
  data: TDocument[];
}

type TQueryArg = { projectKey:string };



const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDocument: build.query<TDocSource, TQueryArg>({
      query: () => '/api/u3179688_homesStaging.json',
      providesTags:[{ type: 'Document', id: 'LIST' }],
      transformResponse(
        baseQueryReturnValue: IAllDocument[],_,
        // meta: BaseQueryMeta<BaseQuery>,
        arg: TQueryArg | undefined
      ): TDocSource {

        const documentInx:number = baseQueryReturnValue.findIndex(b => /^document$/i.test(b.name ?? ''));
        const documents = documentInx > -1 ? baseQueryReturnValue[documentInx].data : ([] as IDocument[]);

        const projectKey:string = arg?.projectKey || '';

        const document = documents
                ? (documents as IDocument[]).find((doc) => doc.project_key === projectKey)
                : undefined;

        const descriptionInx:number = baseQueryReturnValue.findIndex(b => /^description$/i.test(b.name ?? ''));
        const descriptions = descriptionInx > -1 ? baseQueryReturnValue[descriptionInx].data : ([] as IDescription[]);

        const descriptionObj = document && descriptions
              ? (descriptions as IDescription[]).find((description:IDescription) => description.id === document.id)
              : undefined;
        const description = (descriptionObj || defValueDes) as IDescription;

        return {
          title: description.title,
          titleTab: description.title,
          dataWork:dataWork,
          data:dataSource.map(data=> {
            const key = data.key as string;
            // @ts-ignore
            const description2 = description[key] ?? '';
            return {...data,
              description: (description2 as string),
            };
          })
        };
      }
    }),
  }),
  overrideExisting: false,
})

export const { useGetDocumentQuery } = extendedApi;

const dataSource:TDocTablesSource[] = [
  {
    key: 'category',
    name: 'Категория',
    description: 'Комплектация "Под ключ"',
  },
  {
    key: 'price',
    name: 'Бюджет',
    description: '1320000₽',
  },
  {
    key: 'end_date',
    name: 'Дата завершения',
    description: '15.08.2025',
  },
  {
    key: 'project_url',
    name: 'Проект URL',
    description: "https://t.me/homeupakovka",
  },
]

const dataWork:TDocDataWork[] = [
  {
    key: '1',
    name: 'покрасили стены',
  },
  {
    key: '2',
    name: 'отрегулировали окна, поставили москитные сетки',
  },
  {
    key: '3',
    name: 'поменяли унитаз, и все смесители от застройщика',
  },
  {
    key: '4',
    name: 'перенесли розетки в спальне и гостинной',
  },
];

const defValueDes:IDescription = {
  id: "1",
  title: "Евродвушка",
  category: "Комплектация \"Под ключ\"",
  price: "988000",
  project_url: "https:\/\/t.me\/homeupakovka\/41",
  project_des: "канал Telegram",
  createDate: null,
  end_date: "2025-01-20 00:00:00",
  document_id: "2"
}
