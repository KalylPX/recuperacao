import Logo from "./Logo";
import Painel from "./Painel";
import Botao from "./Botao";
import Lanches from "./Lanches";
import Titulo from "./Titulo";
function App(){
  const logo = [
    {
      ifood: "ifood.svg",
    },
  ]
    const aba = [
    {
      tit: "Entregador",
    },
    {
      tit: "Restaurante e Mercado",
    },
    {
      tit: "Carreiras",
    },
    {
      tit: "iFood Card",
    },
  ]
  const cadas = [
    {
      bot1: "Criar conta",
      bot2: "Entrar",
    },
  ]

  const titulo = [
    {
      title: "Destaques"
    }
  ]
  const informacoes = [
    {
      ima: "big-king.webp",
      ti: "Combo Big King",
      su: "Um hamburguer com duas carnes bovinas de 57g, pão com gergelim, queijo...",
      pes: "Serve 1 pessoa",
      preco: "R$ 41,90",
    },
    {
      ima: "cheddar-duplo.webp",
      ti: "Combo Cheddar Duplo",
      su: "Um hamburguer com duas carnes bovinas de 57g, pão preto com gergelim...",
      pes: "Serve 1 pessoa",
      preco: "R$ 41,90",
    },
    {
      ima: "cheeseburger-duplo.webp",
      ti: "Combo Cheeseburger Duplo com Bacon",
      su: "Um hamburguer com duas carnes bovinas de 57g, pão com gergelim, queijo...",
      pes: "Serve 1 pessoa",
      preco: "R$ 36,90",
    },
    {
      ima: "mega-stacker.webp",
      ti: "Combo Big King",
      su: "Um hamburguer com duas carnes bovinas de 113g, pão com gergelim, queijo...",
      pes: "Serve 1 pessoa",
      preco: "R$ 51,90",
    },
  ]

  return(
    <div>
    <div className="logo">
          {logo.map((um) => {
            return <Logo key={um}
                    ifood={um.ifood}
                    />
          })
        }
        </div>
        
        <div className="botoes">
          {aba.map((tres, quatro) => {
            return <Painel key={quatro}
                    tit={tres.tit}
                    />
          })
        }
        </div>

        <div className="cadastro">
          {cadas.map((cinco, seis) => {
            return <Botao key={seis}
                    bot1={cinco.bot1}
                    bot2={cinco.bot2}
                    />
          })
        }
        </div>

        <div className="destaque">
          {titulo.map((nove, dez) => {
            return <Titulo key={dez}
                    title={nove.title}
                    />
        })
        }
        </div>

        <div className="tudo-lanches">
          {informacoes.map((sete, oito) => {
            return <Lanches key={oito}
                    ima={sete.ima}
                    ti={sete.ti}
                    su={sete.su}
                    pes={sete.pes}
                    preco={sete.preco}
                    />
          })
        }
        </div>
        </div>
  )
}
export default App;