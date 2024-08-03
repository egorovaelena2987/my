function Page({restaurant}) {

  
    return (
      <div className="products">
     {restaurant.map((element => {
        const {id, name, price, image} = element;
        return(
            <div className="product-card" key={id}>
                <img src={image} width="300px" height="300px" alt="food"/>
        <div className="product-info">
            <h3>{name}</h3>
            <h4>{price}</h4>

        </div>
            </div>
        )
     }))}
      </div>
    );
}
export default Page;