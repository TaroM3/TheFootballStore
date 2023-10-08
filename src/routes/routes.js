import CartContainer from "../components/page/cart/CartContainer";
import Dashboard from "../components/page/dashboard/DashboardContainer";
import HomeContainer from "../components/page/home/HomeContainer";
import ItemDetailContainer from "../components/page/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/page/itemList/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: HomeContainer,
  },
  {
    id: "list",
    path: "/products",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "dashboard",
    path: "/dashboard",
    Element: Dashboard
  }
];
