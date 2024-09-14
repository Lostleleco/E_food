<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import RestaurantPage from "./Pages/RestaurantPage";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<RestaurantPage />} />
  </Routes>
);

export default Rotas;
=======
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:id" element={<Profile />} />
  </Routes>
)

export default PageRoutes
>>>>>>> dedc4134ec810872587acf0a8c76f598776266c2
