import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ProductScreen from "./components/ProductScreen/ProductScreen";
import CartScreen from "./components/CartScreen/CartScreen";


function App() {

  return (
    <div className="grid-container">
     <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route  path="/cart/:id?" component={CartScreen} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
