import ContactoContainer from "../components/page/contacto/ContactoContainer";
import DashboardContainer from "../components/page/dashboard/DashboardContainer";
import EnviosContainer from "../components/page/envios/EnviosContainer";
import HomeContainer from "../components/page/home/HomeContainer";
import InfoContainer from "../components/page/info/InfoContainer";
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
    id: "subcategories",
    path: "/category/:categoryName/subcategory/:subCategoryName",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "dashboard",
    path: "/dashboard",
    Element: DashboardContainer,
  },
  {
    id: "info",
    path: "/info",
    Element: InfoContainer,
  },
  {
    id: "envios",
    path: "/envios",
    Element: EnviosContainer,
  },
  {
    id: "contacto",
    path: "/contacto",
    Element: ContactoContainer,
  },
];
