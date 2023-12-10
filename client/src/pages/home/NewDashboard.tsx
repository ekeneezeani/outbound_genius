import PieChartBox from "../../components/piechartBox/PieChartBox";
import Pos from "../../components/pos/Pos";
import SalesActivity from "../../components/salesActivity/SalesActivity";
import SalesOrder from "../../components/salesOrder/SalesOrder";
import TopSelling from "../../components/topSelling/TopSelling";
import "./newDashBoard.scss";

const NewDashboard = () => {
  return (
    <div className="newDashboard">
      <div className="box box1">
        <SalesActivity />
      </div>
      <div className="box box2">
        <PieChartBox />
      </div>
      <div className="box box3">
        <TopSelling />
      </div>
      <div className="box box4">
        <Pos />
      </div>
      <div className="box box5">
        <SalesOrder />
      </div>
    </div>
  );
};

export default NewDashboard;
