import { PieChart, Pie, Legend, Tooltip } from "recharts";

// JSON type

export type individualStock = {
  first_stock_name: string;
  quantity: Int16Array;
};

export type wholeGraph = {
  stock_name: individualStock[];
};

// export type GraphData = {
//   the_property?: wholeGraph;
// };

function Graph({ stock_name }: wholeGraph) {
  // let new_data = {};

  const other_graph = {
    stock: [
      { stock_name: "AAPL", quantity: 15 },

      { stock_name: "GOOGL", quantity: 10 },
    ],
  };
  const new_data = stock_name ?? other_graph;

  return (
    <div>
      <h1>Graph of Total Money in Stocks</h1>
      <PieChart height={200} width={200}>
        <Pie
          data={new_data}
          dataKey="quantity"
          nameKey="stock_name"
          // label={(individual_stock) => individual_stock.payload.stock_name}
        ></Pie>
        <Legend></Legend>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
}

export default Graph;
