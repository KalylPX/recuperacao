import "./Botao.css";

function Botao({bot1, bot2}){
    return(
        <div className="botoes">
        <button className="botao1"> {bot1} </button>
        <button className="botao2"> {bot2} </button>
        </div>
    )
}
export default Botao;