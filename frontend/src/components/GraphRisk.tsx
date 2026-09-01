import { PieChart, Pie, Legend, Tooltip } from "recharts";

export type risk_stuff = {
  low_risk: number;
  high_risk: number;
  average_risk: number;
};
export type riskwholeGraph = {
  other_risk_stuff: risk_stuff;
};

function GraphRisk({ other_risk_stuff }: riskwholeGraph) {
  const risk_data = Object.entries(other_risk_stuff).map(
    ([risk_level, amount_risk]) => ({
      risk_level,
      amount_risk,
    }),
  );

  return (
    <div>
      <h1>Risk Graph</h1>
      <PieChart height={200} width={200}>
        <Pie data={risk_data} dataKey="amount_risk" nameKey="risk_level"></Pie>
        <Legend></Legend>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
}

export default GraphRisk;
