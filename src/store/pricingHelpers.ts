import type {TPricingItemProps} from "@/store/typesApp.ts";

export const pricingHelpers: TPricingItemProps = {
  caption: 'Помощь в подготовке',
  titles: [
    {id: 1, title: 'Студия', price: 30},
    {id: 2, title: '1-комнатная', price: 40},
    {id: 3, title: '2/3-комнатная', price: 50},
  ],
  items: [
    {id: 1, body: 'замер, анализ ЦА, выбор планировочного решения всей квартиры'},
    {id: 2, body: 'смета и подбор всей мебели, техники и декора'},
    {id: 3, body: 'визуализация в виде коллажей (2d)'},
  ]
}