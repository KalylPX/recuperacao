import "./Lanches.css";

function Lanches({ima, ti, su, pes, preco}){
    return(
        <div className="cardapio">
        <img className="sanduiches" src={ima} alt="logo"/>
        <h3><strong>{ti}</strong></h3>
        <p>{su}</p>
        <p><strong>{pes}</strong></p>
        <p><strong>{preco}</strong></p>
        </div>
    )
}
export default Lanches;