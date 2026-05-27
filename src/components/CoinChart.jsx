import {
    LineChart,
    Line,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

function CoinChart({ data }) {
    const chartData = data.prices.map((item) => ({
            date: new Date(item[0]).toLocaleDateString(),
            price: item[1],
        }));

    return (<div style={{
        width: "100%",
        overflow: "hidden",
    }}>
        <ResponsiveContainer
            width="100%"
            height={400}
        >
            <LineChart data={chartData}>
                <XAxis dataKey="date" />

                <YAxis width={100} />

                <Tooltip />

                <Line
                    type="monotone"
                    dataKey="price"
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    </div>
    );
}

export default CoinChart;