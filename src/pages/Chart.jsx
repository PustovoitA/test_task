import { useState } from "react";

import {
    Button,
    Segmented,
    Spin,
    Flex,
} from "antd";

import { ReloadOutlined } from "@ant-design/icons";

import { useCoinChart } from "../hooks/useCoinChart";

import CoinChart from "../components/CoinChart";

function Chart() {
    const [coinId, setCoinId] = useState("bitcoin");
    const {data, isLoading, isFetching, refetch, isError} = useCoinChart(coinId);

    if (isError) return (<div> Failed to load chart </div>);

    return (
        <Flex
            vertical
            gap={24}
        >
            <Segmented
                block
                value={coinId}
                onChange={setCoinId}
                options={[
                    {
                        label: "Bitcoin",
                        value: "bitcoin",
                    },

                    {
                        label: "Ethereum",
                        value: "ethereum",
                    },

                    {
                        label: "Dogecoin",
                        value: "dogecoin",
                    },
                ]}
            />

            {isLoading ? (
                <Spin size="large" />
            ) : (
                <CoinChart data={data} />
            )}

            <Button
                type="primary"
                icon={<ReloadOutlined />}
                loading={
                    isFetching &&
                    !isLoading
                }
                onClick={() => refetch()}
            >
                Refresh
            </Button>
        </Flex>
    );
}

export default Chart;