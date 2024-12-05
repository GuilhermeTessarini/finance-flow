import { format } from "date-fns";
import {
    Tooltip,
    XAxis,
    ResponsiveContainer,
    CartesianGrid,
    Bar,
    BarChart
} from "recharts";

import { CustomToolTip } from "./custom-tooltip";

type Props = {
    data: {
        date: string;
        income: number;
        expense: number;
    }[];
};

export const BarVariant = ({ data }: Props) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
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
                <Bar
                    dataKey="income"
                    fill="#0413ba"
                    className="drop-shadow-sm"
                />
                <Bar
                    dataKey="expenses"
                    fill="#f43f5e"
                    className="drop-shadow-sm"
                />
            </BarChart>
        </ResponsiveContainer>
    )
}