import ProductEditScreen from "../pages/Admin/ProductEditScreen";
import CartScreen from "../pages/CartScreen/CartScreen";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import PaymentMethodScreen from "../pages/PaymentMethodScreen/PaymentMethodScreen";
import PlaceOrderScreen from "../pages/PlaceOrderScreen/PlaceOrderScreen";
import ProductScreen from "../pages/ProductScreen/ProductScreen";
import RegisterScreen from "../pages/RegisterScreen/RegisterScreen";
import { SaleScreen } from "../pages/SaleScreen/SaleScreen";
import SearchScreen from "../pages/SearchScreen/SearchScreen";
import ShippingAddressScreen from "../pages/ShippingAddressScreen/ShippingAddressScreen";
import SigninScreen from "../pages/SigninScreen/SigninScreen";

export const publicRoutes = [
  {
    name: "Главная",
    path: "/",
    Component: HomeScreen
  },
  { name: "Отдельный продукт",
    path: "/product/:id",
    Component: ProductScreen
  },
  { name: "Изменить продукт",
    path: "/product/:id/edit",
    Component: ProductEditScreen
  },
  {
    name: "Корзина",
    path: "/cart/:id?",
    Component: CartScreen
  },
  {
    name: "Авторизация",
    path: "/signin",
    Component: SigninScreen
  },
  {
    name: "Регистрация",
    path: "/register",
    Component: RegisterScreen
  },
  {
    name: "Доставка",
    path: "/shipping",
    Component: ShippingAddressScreen
  },
  {
    name: "Оплата",
    path: "/payment",
    Component: PaymentMethodScreen
  },
  {
    name: "Оформить заказ",
    path: "/placeorder",
    Component: PlaceOrderScreen
  },
  {
    name: "Поиск",
    path: "/search/name/:name?", //todo :name? means :name is optional
    Component: SearchScreen
  },
  {
    name: "Акция",
    path: "/products/sale/:name", //todo :name? means :name is optional
    Component: SaleScreen
  },
];
