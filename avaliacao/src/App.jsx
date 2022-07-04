import Logo from "./Logo";
import Painel from "./Painel";

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
    </div>

    
  )
}
export default App;