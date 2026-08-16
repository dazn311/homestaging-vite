import type {TPricingItemProps} from "@/store/typesApp.ts";

export const pricingOnLine: TPricingItemProps = {
  caption: 'Онлайн консультация',
  titles: [
    {id: 1, title: 'Студия', price: 10},
    {id: 2, title: '1-комнатная', price: 20},
    {id: 3, title: '2/3-комнатная', price: 30},
  ],
  items: [
    {id: 2, body: 'подбор всей мебели, техники и декора'},
    {id: 3, body: 'визуализация в виде коллажей (2d)'},
  ]
}