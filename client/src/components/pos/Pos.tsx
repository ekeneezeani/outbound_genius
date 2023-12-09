import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./pos.scss";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Pos = () => {
  return (
    <div className="pos">
      <div className="title">
        <span className="boxTitle">PURCHASE ORDER</span>
        <span className="monthFIlter">
          This Month &nbsp;
          <FontAwesomeIcon icon={faSortDown} />
        </span>
      </div>
      <div className="details">
        <span>Quantity Ordered</span>
        <span className="quantity">652.00</span>
      </div>
    </div>
  );
};

export default Pos;
