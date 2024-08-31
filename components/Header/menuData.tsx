import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Быстрые кредиты",
    path: "/mfo",
    newTab: false,
  },
  {
    id: 3,
    title: "Сервисы",
    path: "/mfoservices",
    newTab: false,
  },
  {
    id: 4,
    title: "Залог",
    path: "/zalog",
    newTab: false,
  },
  {
    id: 5,
    title: "Кредитная история",
    path: "/scoring",
    newTab: false,
  }
];
export default menuData;
