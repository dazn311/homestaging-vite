
/**
 * docApi
 * */
import { baseApi } from './baseApi.ts'

import type {
  IAllDocument, IBreadcrumbs,
  IDescription,
  IDocument, IImage,
  TDocSource,
} from "../types/documents.ts";
import {dataSource} from "./data/dataSource.ts";
import {dataTableWork} from "./data/dataTableWork.ts";
import {defValueBread, defValueDes} from "./data/defValues.ts";

type TQueryArg = { id:string };


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

        const id:string = arg?.id || '';

        const document = documents
                ? (documents as IDocument[]).find((doc) => doc.id === id)
                : undefined;

        const descriptionInx:number = baseQueryReturnValue.findIndex(b => /^description$/i.test(b.name ?? ''));
        const descriptions = descriptionInx > -1 ? baseQueryReturnValue[descriptionInx].data : ([] as IDescription[]);

        const descriptionObj = document && descriptions
              ? (descriptions as IDescription[]).find((description:IDescription) => description.id === document.id)
              : undefined;
        const description = (descriptionObj || defValueDes) as IDescription;

        const breadcrumbsInx:number = baseQueryReturnValue.findIndex(b => /^breadcrumbs$/i.test(b.name ?? ''));
        const breadcrumbs = breadcrumbsInx > -1 ? baseQueryReturnValue[breadcrumbsInx].data : ([] as IBreadcrumbs[]);
        const breadcrumbObj = breadcrumbs
          ? (breadcrumbs as IBreadcrumbs[]).find((breadcrumb) => breadcrumb.document_id === id)
          : undefined;
        const breadcrumb = (breadcrumbObj || defValueBread) as IBreadcrumbs;

        const imagesInx:number = baseQueryReturnValue.findIndex(b => /^image$/i.test(b.name ?? ''));
        const imagesArr = imagesInx > -1 ? (baseQueryReturnValue[imagesInx].data as IImage[]) : ([] as IImage[]);
        const images = imagesArr
          .filter(image => image.document_id === id)
          .map(image => `https://homesstaging.online/${image.image_url}`);


        return {
          title: breadcrumb.project_title,
          titleTab: description.title,
          dataWork:dataTableWork,
          images:images,
          data:dataSource.map(data=> {
            const key = data.key as string;
            // @ts-ignore
            let description2 = description[key] ?? '';
            if (description2 && /end_date/.test(key)) {
              const description2Date = new Date(description2);
              description2 = ("0"+description2Date.getDate()).slice(-2) + '.' +
                                    ("0"+(description2Date.getMonth()+1)).slice(-2) +'.' + description2Date.getFullYear();
            }
            return {...data,
              description: description2,
            };
          })
        };
      }
    }),
  }),
  overrideExisting: false,
})

export const { useGetDocumentQuery } = extendedApi;

