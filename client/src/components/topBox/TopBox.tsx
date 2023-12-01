import "./topbox.scss"
import {topSellingProduct} from "../../data"

const TopBox = () => {
  
  return (
    <div className="topbox">
      <h1>Top Selling</h1>
      <div className="list">
        {topSellingProduct.map((product) => (
          <div className="listitems" key={product.id}>
            <div className="product">
              <img src={product.picture} alt=""/>
              <span className="productname">{product.name}</span>
            </div>
            <span className="quantity">{product.quantity}</span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default TopBox