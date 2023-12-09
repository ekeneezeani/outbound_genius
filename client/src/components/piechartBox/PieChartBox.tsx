import { Cell, Pie, PieChart } from "recharts";
import "./pieChartBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";
const data = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 700 },
];
const COLORS = ["teal", "tomato"];

const PieChartBox = () => {
  return (
    <>
      <div className="wrapper">
        <span>PRODUCT DETAILS</span>
      </div>
      <div className="pieChartBox">
        <div className="chartInfo">
          <div className="chartData">
            <div className="lineItem">
              <span className="description">Low Stock Items</span>
              <span className="quantity">3</span>
            </div>
            <div className="lineItem">
              <span className="description">All Items Group</span>
              <span className="quantity">39</span>
            </div>
            <div className="lineItem">
              <span className="description">Low All Items</span>
              <span className="quantity">190</span>
            </div>
            <div className="lineItem">
              <span className="description">
                Unconfirmed Items &nbsp;
                <FontAwesomeIcon icon={faExclamationCircle} />
              </span>
              <span className="quantity">121</span>
            </div>
          </div>
          <div className="chart">
            <span>Active Items</span>
            <PieChart width={400} height={130}>
              <Pie
                data={data}
                cx={200}
                cy={55}
                innerRadius={25}
                outerRadius={50}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChartBox;
