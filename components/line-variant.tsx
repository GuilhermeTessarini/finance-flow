import { format } from "date-fns";
import {
    Tooltip,
    XAxis,
    ResponsiveContainer,
    CartesianGrid,
    Line,
    LineChart
} from "recharts";

import { CustomToolTip } from "./custom-tooltip";

type Props = {
    data: {
        date: string;
        income: number;
        expenses: number;
    }[];
};

export const LineVariant = ({ data }: Props) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    axisLine={false}
                    tickLine={false}
                    dataKey="date"
                    stroke="#000"
                    tickFormatter={(value) => format(value, "dd MMM")}
                    style={{ fontSize: "12px" }}
                    tickMargin={16}
                />
                <Tooltip content={CustomToolTip} />
                <Line
                    dot={false}
                    dataKey="income"
                    stroke="#0413ba"
                    strokeWidth={2}
                    className="drop-shadow-sm"
                />
                <Line
                    dot={false}
                    dataKey="expenses"
                    stroke="#f43f5e"
                    strokeWidth={2}
                    className="drop-shadow-sm"
                />
            </LineChart>
        </ResponsiveContainer>
    )
}