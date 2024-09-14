<<<<<<< HEAD
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Footer from "./Components/Footer";
import { store } from "./store";

import Rotas from "./routes";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";
import { GlobalCSS } from "./Global";
import Payment from "./Components/Payment";
=======
import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './routes'
import { GlobalStyles } from './styles'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './store'
>>>>>>> dedc4134ec810872587acf0a8c76f598776266c2

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
<<<<<<< HEAD
        <GlobalCSS />
        <Rotas />
        <Footer />
        <Cart />
        <Checkout />
        <Payment />
        <Analytics />
      </BrowserRouter>
    </Provider>
  );
=======
        <GlobalStyles />
        <PageRoutes />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
>>>>>>> dedc4134ec810872587acf0a8c76f598776266c2
}

export default App;
