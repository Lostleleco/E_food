import logo from './assets/images/logo.png'
import fundo from './assets/images/fundo.png'
import pizza from './assets/images/image 3.png'
import {
  CardsContainer,
  Conteudo,
  Dolce,
  Fundo,
  Header,
  Italiana,
  Logo,
  Menu
} from './styles'

const Perfil1 = () => (
  <>
    <Header>
      <Menu>Restaurantes</Menu>
      <Logo src={logo} alt="Efood" />
      <Menu>0 produto(s) no carrinho</Menu>
    </Header>
    <Fundo backgroundImage={fundo}>
      <Italiana>Italiana</Italiana>
      <Dolce>La Dolce Vita Trattoria</Dolce>
    </Fundo>

    <CardsContainer>
      <Conteudo>
        <img src={pizza} alt="card" />
        <h2>Pizza Marguerita</h2>
        <p>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </p>
        <button>Adicionar ao carrinho</button>
      </Conteudo>
      <Conteudo>
        <img src={pizza} alt="card" />
        <h2>Pizza Marguerita</h2>
        <p>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </p>
        <button>Adicionar ao carrinho</button>
      </Conteudo>
      <Conteudo>
        <img src={pizza} alt="card" />
        <h2>Pizza Marguerita</h2>
        <p>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </p>
        <button>Adicionar ao carrinho</button>
      </Conteudo>
      <Conteudo>
        <img src={pizza} alt="card" />
        <h2>Pizza Marguerita</h2>
        <p>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </p>
        <button>Adicionar ao carrinho</button>
      </Conteudo>
      <Conteudo>
        <img src={pizza} alt="card" />
        <h2>Pizza Marguerita</h2>
        <p>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </p>
        <button>Adicionar ao carrinho</button>
      </Conteudo>
      <Conteudo>
        <img src={pizza} alt="card" />
        <h2>Pizza Marguerita</h2>
        <p>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </p>
        <button>Adicionar ao carrinho</button>
      </Conteudo>
    </CardsContainer>
  </>
)

export default Perfil1
