import "./Lanches.css";

function Lanches({ima, ti, su, pes, preco}){
    return(
        <div>
        <img className="Big_King" src={ima} alt="logo"/>
        <p>{ti}</p>
        <p>{su}</p>
        <p>{pes}</p>
        <p>{preco}</p>
        </div>
    )
}
export default Lanches;