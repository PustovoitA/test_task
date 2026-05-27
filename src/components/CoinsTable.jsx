import { Space, Table } from "antd"
import {
    formatPrice,
    formatPercent,
    formatCompactNumber,
} from "../utils/formatters";

function CoinsTable ({data, isLoading, pagination, onPageChange, currentPage}) {

    const columns = [
        
        {
            title: "#",
            dataIndex: "market_cap_rank",
            sorter: (a, b) => a.market_cap_rank - b.market_cap_rank,
        },

        {
            title: "Name",
            key: "name",

            render: (_, coin) => (
                <Space>
                    <img
                        src={coin.image}
                        alt={coin.name}
                        width={24}
                    />

                    <span>{coin.name}</span>
                </Space>
            ),
        },

        {
            title: "Price",
            dataIndex: "current_price",

            render: (value) =>
                formatPrice(value),

            sorter: (a, b) =>
                a.current_price - b.current_price,
        },

        {
            title: "24h %",
            dataIndex:
                "price_change_percentage_24h",

            render: (value) => (
                <span
                    style={{
                        color:
                            value >= 0
                                ? "green"
                                : "red",
                    }}
                >
                    {formatPercent(value)}
                </span>
            ),

            sorter: (a, b) =>
                a.price_change_percentage_24h -
                b.price_change_percentage_24h,
        },

        {
            title: "Market Cap",
            dataIndex: "market_cap",

            render: (value) =>
                `$${formatCompactNumber(value)}`,

            sorter: (a, b) =>
                a.market_cap - b.market_cap,
        },

        {
            title: "Volume 24h",
            dataIndex: "total_volume",

            render: (value) =>
                `$${formatCompactNumber(value)}`,

            sorter: (a, b) =>
                a.total_volume - b.total_volume,
        },
    ]

    return(
        <Table
            rowKey="id"
            columns={columns}
            dataSource={data}
            loading={isLoading}
            pagination = {
                pagination
                ?{
                    current: currentPage,
                    pageSize: 20,
                    total: 400,
                 }
                :false
            }
            onChange={(paginationInfo)=>{
                if(pagination){
                    onPageChange(
                        paginationInfo.current
                    )
                }
            }}
            sticky
        />)
}

export default CoinsTable