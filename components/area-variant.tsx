import { format } from "date-fns";
import {
    Tooltip,
    XAxis,
    AreaChart,
    Area,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";
import { CustomToolTip } from "./custom-tooltip";


type Props = {
    data: {
        date: string;
        income: number;
        expense: number;
    }[];
};

export const AreaVariant = ({ data }: Props) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <defs>
                    <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0413ba" stopOpacity={1} />
                    </linearGradient>
                    <linearGradient id="expenses" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f43f5e" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <XAxis
                    axisLine={false}
                    tickLine={false}
                    dataKey="date"
                    stroke="#000"
                    tickFormatter={(value) => format(value, "dd MMM")}
                    style={{ fontSize: "12px" }}
                    tickMargin={16}
                />
                <Tooltip content={CustomToolTip}/>
                <Area 
                    type="monotone"
                    dataKey="income"
                    stackId="income"
                    strokeWidth={2}
                    stroke="0413ba"
                    fill="url(#income)"
                    className="drop-shadow-sm"
                />
                <Area 
                    type="monotone"
                    dataKey="expenses"
                    stackId="expenses"
                    strokeWidth={2}
                    stroke="f43f5e"
                    fill="url(#expenses)"
                    className="drop-shadow-sm"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}