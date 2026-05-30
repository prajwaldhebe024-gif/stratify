import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ReferenceDot
} from "recharts";

type Props = {
  strategyName: string;
};

function StrategyPayoffChart({
  strategyName,
}: Props) {
  let data = [];

  if (strategyName === "Iron Condor") {
    data = [
      { price: 80, pnl: -100 },
      { price: 90, pnl: 0 },
      { price: 100, pnl: 100 },
      { price: 110, pnl: 100 },
      { price: 120, pnl: 0 },
      { price: 130, pnl: -100 },
    ];
  } else {
    data = [
      { price: 80, pnl: -50 },
      { price: 100, pnl: 0 },
      { price: 120, pnl: 50 },
    ];
  }

  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8">
      <h2 className="text-3xl font-bold mb-6">
        Payoff Diagram
      </h2>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <ReferenceLine
              y={0}
              stroke="#64748b"
              strokeDasharray="5 5"
            />

            <ReferenceDot
              x={100}
              y={100}
              r={6}
              fill="#22c55e"
            />

            <XAxis
              dataKey="price"
              tick={{ fill: "#94a3b8" }}
              axisLine={{ stroke: "#334155" }}
            />

            <YAxis
              tick={{ fill: "#94a3b8" }}
              axisLine={{ stroke: "#334155" }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="pnl"
              stroke="#3b82f6"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StrategyPayoffChart;