import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./salesActivity.scss";
import {
  faMinusCircle,
  faCircleCheck,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";

const SalesActivity = () => {
  return (
    <div className="salesActiviy">
      <div className="activityInfo">
        <span className="title"> Sales Activity</span>
        <div className="activities">
          <div className="activity">
            <span className="quantity" style={{ color: "gold" }}>
              {" "}
              228{" "}
            </span>
            <span>Qty</span>
            <div className="status">
              <FontAwesomeIcon icon={faMinusCircle} />
              <span className="message">TO BE PACKED</span>
            </div>
          </div>
          <div className="activity">
            <span className="quantity" style={{ color: "teal" }}>
              {" "}
              6{" "}
            </span>
            <span>Pkgs</span>
            <div className="status">
              <FontAwesomeIcon icon={faCircleDot} />
              <span className="message">TO BE SHIPPED</span>
            </div>
          </div>
          <div className="activity">
            <span className="quantity" style={{ color: "tomato" }}>
              {" "}
              10{" "}
            </span>
            <span>Pkgs</span>
            <div className="status">
              <FontAwesomeIcon icon={faMinusCircle} />
              <span className="message">TO BE DELIVERED</span>
            </div>
          </div>
          <div className="activity">
            <span className="quantity" style={{ color: "gold" }}>
              {" "}
              474{" "}
            </span>
            <span>Qty</span>
            <div className="status">
              <FontAwesomeIcon icon={faCircleCheck} />
              <span className="message">TO BE INVOICED</span>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="inventorySummary">
        <span className="title">Inventory Summary</span>
        <div className="iventoryData">
          <div className="inventoryInfo">
            <span className="title">QUANTITY IN HAND</span>
            <span className="amount">10458...</span>
          </div>
          <div className="inventoryInfo">
            <span className="title">QUANTITY TO BE RECEIVED</span>
            <span className="amount">168</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesActivity;
