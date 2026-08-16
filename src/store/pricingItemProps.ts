import type {TPricingItemProps} from "@/store/typesApp.ts";

export const pricingItemProps: TPricingItemProps = {
  caption: 'Хоумстейджинг',
  titles: [
    {id: 1, title: 'Студия', price: 150},
    {id: 2, title: '1-комнатная', price: 180},
    {id: 3, title: '2/3-комнатная', price: 200},
  ],
  items: [
    {id: 1, body: 'замер, анализ ЦА, выбор планировочного решения всей квартиры'},
    {id: 2, body: 'смета и последующий подбор всей мебели, техники и декора'},
    {id: 3, body: 'визуализация в виде коллажей (2d)'},
    {id: 4, body: 'закупка и прием всех материалов на объект'},
    {id: 5, body: 'сборка мебели и техники, покраска стен и пр.'},
    {id: 6, body: 'клининг и стейджинг, фотосъемка объекта'},
  ]
}