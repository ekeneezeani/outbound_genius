import ChartBox from "../../components/chartBox/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import "./home.scss";
import { chartBoxData, chartBoxProduct, chartBoxRevenue, chartBoxRatio, barChartBoxRevenue} from "../../data";
import BarchartBox from "../../components/barchartBox/BarchartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxData} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4"></div>
      <div className="box box5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6"><ChartBox {... chartBoxRatio} /></div>
      <div className="box box7">box7</div>
      <div className="box box8"><BarchartBox {... barChartBoxRevenue}/></div>
      <div className="box box9"><BarchartBox {... barChartBoxRevenue}/></div>
    </div>
  );
};

export default Home;
