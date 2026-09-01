import { PieChart, Pie, Legend, Tooltip } from "recharts";

export type individualStock = {
  first_stock_name: string;
  quantity: Int16Array;
};

export type wholeGraph = {
  stock_name: individualStock[];
};

function GraphSector({ stock_name }: wholeGraph) {
  const new_data = stock_name;

  return (
    <div>
      <h1>Stock Sectors</h1>
      <PieChart height={200} width={200}>
        <Pie data={new_data} dataKey="quantity" nameKey="stock_name"></Pie>
        <Legend></Legend>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
}

export default GraphSector;
