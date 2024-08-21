import image1 from './components/container/assets/firstpag/image1.png'
import image3 from './components/container/assets/firstpag/Dribbble-Light-Preview.png'
import image4 from './components/container/assets/firstpag/imagem4.png'
import Header from './components/Header/index'
import { CardPrincipal } from './components/container/Secao1/styles'
import { Card } from './components/container/Secao1/index'
import Footer from './components/Footer/index'

function App() {
  const cardOne = {
    destaque: true,
    avaliacao: 4.9,
    tag: 'italiana',
    titulo: 'Hioki Sushi',
    descricao:
      ' Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: image4,
    star: image4
  }

  const cardtwo = {
    destaque: false,
    avaliacao: 4.5,
    tag: 'japonesa',
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: image1,
    star: image3
  }
  const cardtree = {
    destaque: false,
    avaliacao: 4.6,
    tag: 'japonesa',
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: image1,
    star: image3
  }
  const cardfour = {
    destaque: false,
    avaliacao: 4.5,
    tag: 'japonesa',
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: image1,
    star: image3
  }
  const cardfive = {
    destaque: false,
    avaliacao: 4.5,
    tag: 'japonesa',
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: image1,
    star: image3
  }
  const cardsix = {
    destaque: false,
    avaliacao: 4.5,
    tag: 'japonesa',
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: image1,
    star: image3
  }
  return (
    <div>
      <Header />
      <CardPrincipal>
        <Card {...cardOne} />
        <Card {...cardtwo} />
        <Card {...cardtree} />
        <Card {...cardfour} />
        <Card {...cardfive} />
        <Card {...cardsix} />
      </CardPrincipal>
      <Footer />
    </div>
  )
}

export default App
