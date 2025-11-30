export type TDataApp = {
  [key: string]: {
    jkName:string;
    jkTitle:string;
    projects: {
      [key: string]: string;
    }
  };
};

export const dataApp:TDataApp = {
  ilyinskieLuga: {
    jkName: 'ilyinskieLuga',
    jkTitle: 'ЖК Ильинские Луга',
    projects: {
      ilyinskie20:'ул. Заповедная, 20',
      ilyinskie21:'ул. Заповедная, 21',
    },
  },
  rimskogoKorsakova: {
    jkName: 'rimskogoKorsakova',
    jkTitle: 'ЖК Римского-Корсакова',
    projects: {
      rimskogoKorsakova9152:'ул. Римского-Корсакова, 11к9',
    },
  },
  mitinskiiles: {
    jkName: 'mitinskiiles',
    jkTitle: 'ЖК Митинский лес',
    projects: {
      mitino1:'ул. Муравская, 38Бк1',
      mitino2:'ул. Муравская, 32к1',
    },
  },
  kronstadskii: {
    jkName: 'kronstadskii',
    jkTitle: 'ЖК Кронштадтский',
    projects: {
      kronstadskii8k2:'Кронштадтский бул., 8к2',
    },
  },
  hollandpark: {
    jkName: 'hollandpark',
    jkTitle: 'ЖК Holland park',
    projects: {
      ozerova8k1kv176:'ул. Озерова, 8к1',
    },
  },

}