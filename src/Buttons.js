function Buttons({filteredMenu}) {
    return(
        <div className="cont">
            <button onClick={() =>  filteredMenu("poke")} className="change">Poke</button>
            <button onClick={() =>  filteredMenu("drink")} className="change">Drinks</button>
            <button onClick={() => filteredMenu("dessert")} className="change">Dessert</button>
    
        </div>
    )
}
export default Buttons;