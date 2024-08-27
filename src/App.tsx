import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom'
import image1 from './components/container/assets/firstpag/image1.png'
import image3 from './components/container/assets/firstpag/Dribbble-Light-Preview.png'
import image4 from './components/container/assets/firstpag/imagem4.png'
import Header from './components/Header/index'
import { CardPrincipal } from './components/Pages/Home/styles'
import { Card } from './components/Pages/Home/index'
import Footer from './components/Footer/index'
import Perfil1 from './components/Pages/Perfil1'

function Home() {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate('/perfil1')
  }

  const cardOne = {
    destaque: true,
    avaliacao: 4.9,
    tag: 'italiana',
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: image4,
    star: image3,
    onClick: handleCardClick
  }

  const cardtwo = {
    destaque: false,
    avaliacao: 4.5,
    tag: 'japonesa',
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: image1,
    star: image3,
    onClick: handleCardClick
  }

  const cards = [cardOne, cardtwo, cardtwo, cardtwo, cardtwo, cardtwo]

  return (
    <div>
      <Header />
      <CardPrincipal>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </CardPrincipal>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Perfil1" element={<Perfil1 />} />
      </Routes>
    </Router>
  )
}

export default App
