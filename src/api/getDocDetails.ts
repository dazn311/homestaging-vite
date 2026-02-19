const baseConfig = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
};

export type TDocumentResponse = {
  name: string;
  data: TDocument[];
}
export type TDocument = {
  "id": string;
  "type": string;
  "mode_id": string;
  "project_key": string;
  "createDate": string;
  "userRole": string;
  "fileName": string;
}
//    "id": "1",
//     "title": "Евродвушка",
//     "category": "Комплектация \"Под ключ\"",
//     "price": "988000",
//     "project_url": "https://t.me/homeupakovka/41",
//     "project_des": "канал Telegram",
//     "createDate": null,
//     "end_date": "2025-01-20 00:00:00",
//     "document_id": "2"

export type TDescriptionResponseDto = {
  name: string;
  "data": TDescriptionDto[];
}
export type TDescriptionDto = {
  "id": string;
  "title": string;
  "category": string;
  "price": string;
  "project_url": string;
  "project_des": string;
  "createDate": string;
  "end_date": string;
  "document_id": string;
}

export type TDataSource = {
  title: string;
  data: TDataSourceDto[];
  dataWork: TDataWork[];
}

export type TDataSourceDto = {
  key: string;
  name: string;
  description: string;
}

export type TDataWork = {
  key: string;
  name: string;
}

export const getDocDetails = async ({projectKey}: { projectKey: string }): Promise<TDataSource> => {
  const responseDocument = await fetch('/api/document.json', baseConfig);
  const responseDescription = await fetch('/api/description.json', baseConfig);
  const documents: TDocumentResponse = await responseDocument.json();
  const document = documents.data.find((doc) => doc.project_key === projectKey);

  const descriptions: TDescriptionResponseDto = await responseDescription.json();
  const descriptionObj = document ? descriptions.data.find((description) => description.id === document.id) : undefined;
  if (!descriptionObj) {
    return {
      title: "",
      data:dataSource,
      dataWork:dataWork
    };
  }


  return {
    title: descriptionObj.title,
    dataWork:dataWork,
    data:dataSource.map(data=> {
      const key = data.key as string;
      // @ts-ignore
      const description = descriptionObj[key] ?? '';
      return {...data,
        description: (description as string),
      };
    })
  };
}
const dataSource:TDataSourceDto[] = [
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

const dataWork:TDataWork[] = [
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