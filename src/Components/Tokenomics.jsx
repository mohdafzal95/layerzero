import React, { useEffect , useRef} from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import BlinkingStarsBackground from "../Components/BlinkingStarsBackground";
import AOS from "aos";
import "aos/dist/aos.css";

const Tokenomics = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const pieRef=useRef(null)
  const data = [
    { name: "Airdrop", value: 10 },
    { name: "Treasury", value: 10 },
    { name: "Staking", value: 37 },
    { name: "Liquidity", value: 20.25 },
    { name: "Marketing", value: 10 },
    { name: "Community", value: 12.25 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
  ];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 1;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill={fill}
        >{`${(percent * 100).toFixed(2)}%`}</text>
      </g>
    );
  };

  const [activeIndex, setActiveIndex] = React.useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };
  const size=window.innerWidth;
  return (
    <div
      id="tokenomics"
      className="tokenomics-section   text-white bg-ocean-blue-900 py-12"
    >
      <div className=" object-cover  absolute">
        <BlinkingStarsBackground />
      </div>
      <div
        className="container flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <h2 className=" text-2xl md:text-4xl font-bold mb-8 text-center text-white border border-white w-fit rounded-full p-4">
          TOKENOMICS & CALCULATIONS
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className=" object-cover  absolute">
            <BlinkingStarsBackground />
          </div>
          <div className="w-full md:w-1/3">
            <div className="bg-ocean-blue-900  rounded-lg shadow-md p-6 space-y-4">
              <div className="flex justify-between border-2 rounded-full p-3">
                <span>Total Supply:</span>
                <span>10,000,000,000</span>
              </div>
            </div>
          </div>
          <div id="chart"className="w-screen md:w-2/3 ">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  ref={pieRef}
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={`${size<=320?40:60}`}
                  outerRadius={`${size<=320?60:100}`}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/3">
            <div className="bg-ocean-blue-900  text-white rounded-lg shadow-md p-6 space-y-4">
              <div className=" object-cover  absolute">
                <BlinkingStarsBackground />
              </div>
              {data.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: COLORS[index] }}
                    ></div>
                    <span>{item.name}:</span>
                  </div>
                  <span>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
