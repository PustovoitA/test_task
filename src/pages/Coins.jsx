import { useEffect } from "react";
import { useCoins } from "../hooks/useCoins"
import { Spin } from "antd";
import CoinsTable from "../components/CoinsTable";


function Coins(){
    const {data, isLoading, isError, isSuccess} = useCoins();

    if(isLoading){
        return <Spin size="large" />
    }

    if(isError){
        return <div> Data is not found </div>
    }

    if(isSuccess){
        return <CoinsTable data={data} isLoading={isLoading} />
    }
}

export default Coins