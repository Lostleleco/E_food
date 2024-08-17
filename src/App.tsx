import image1 from './components/container/assets/firstpag/image1.png'
import image from './components/container/assets/firstpag/imagem.png'
import Header from './components/Header/index'
import { CardPrincipal } from './components/container/Secao1/styles'

import { Card } from './components/container/Secao1/index'
function App() {
  const cardData = {
    avaliacao: 4,
    tag: 'italiana',
    titulo: 'Meu Primeiro Card',
    descricao: 'Uma breve descrição sobre o card.',
    imagem: image1
  }
  const cardSeila = {
    avaliacao: 4.5,
    tag: 'ijaponesa',
    titulo: 'Meu Primeiro Card',
    descricao: 'Uma breve descrição sobre o card.',
    imagem: image
  }
  return (
    <div>
      <Header />
      <CardPrincipal>
        <Card {...cardData} />

        <Card {...cardSeila} />
      </CardPrincipal>
    </div>
  )
}

export default App
