import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barchartBox.scss";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  chartData: object[];
};

function BarchartBox(props: Props) {
  return (
    <div className="barchart">
      <div className="barChatInfo">
        <img src={props.icon} alt="" />
        <span className="title"> Total Earnings</span>
      </div>

      <div className="barChartBox">
        <ResponsiveContainer width="99%" height={120}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              cursor={{fill:"none"}}
              labelStyle={{display:"none"}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarchartBox;
