<<<<<<< HEAD
import Banner from "../../Components/Banner";
import ClockSpinner from "../../Components/ClockSpinner";

import RestaurantList from "../../Components/RestaurantList";
import { useGetRestaurantsQuery } from "../../services/api";
=======
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

export interface Menu {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  return (
    <>
      <Hero />
      <RestaurantsList />
      <Footer />
    </>
  )
}
>>>>>>> dedc4134ec810872587acf0a8c76f598776266c2

export type restaurantsType = {
  id: number;
  titulo: string;
  destaque: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;

  cardapio: [
    {
      id: number;
      foto: string;
      preco: number;
      nome: string;
      descricao: string;
      porcao: string;
    }
  ];
};

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery();

  if (restaurants) {
    return (
      <>
        <Banner />
        <RestaurantList restaurants={restaurants} />
      </>
    );
  }

  return (
    <>
      <Banner />
      <ClockSpinner />
    </>
  );
};

export default Home;
