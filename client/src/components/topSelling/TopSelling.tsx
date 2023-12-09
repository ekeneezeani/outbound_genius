import "./topSelling.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";


const TopSelling = () => {
  return (
    <div className="topSelling">
      <div className="title">
        <span className="boxTitle">TOP SELLING ITEMS</span>
        <span className="yearFilter">
          Previous Year &nbsp;
          <FontAwesomeIcon icon={faSortDown} />
        </span>
      </div>
      <div className="products">
        <div className="product">
          <img
            src="https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png"
            alt=""
          />
          <span className="productName">Sony Bravia KDL-47W805A</span>
          <div className="quantity-grouping">
            <span className="quantity">172</span>
            <span className="grouping">sets</span>
          </div>
        </div>

        <div className="product">
          <img
            src="https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png"
            alt=""
          />
          <span className="productName">Playstation 5 Digital Edition</span>
          <div className="quantity-grouping">
            <span className="quantity">1,023</span>
            <span className="grouping">pcs</span>
          </div>
        </div>
        <div className="product">
          <img
            src="https://images.samsung.com/is/image/samsung/p6pim/ca/2302/gallery/ca-galaxy-s23-s918-sm-s918wzgfxac-534851103?$650_519_PNG$"
            alt=""
          />
          <span className="productName">Samsung Galaxy S23 Ultra</span>
          <div className="quantity-grouping">
            <span className="quantity">134</span>
            <span className="grouping">pcs</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TopSelling;
